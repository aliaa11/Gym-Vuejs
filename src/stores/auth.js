import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false
    }),

    actions: {
        async register(userData) {
            try {
                const requiredFields = ['firstName', 'lastName', 'email', 'mobile', 'password']
                const missingFields = requiredFields.filter(field => !userData[field])

                if (missingFields.length > 0) {
                    throw new Error(`Missing required fields: ${missingFields.join(', ')}`)
                }

                const checkRes = await fetch(`http://localhost:3000/users?email=${userData.email}`)
                if (!checkRes.ok) throw new Error('Failed to check existing users')

                const existingUsers = await checkRes.json()
                if (existingUsers.length > 0) {
                    throw new Error('Email already registered')
                }

                const res = await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData)
                })

                if (!res.ok) throw new Error('Registration failed')

                const newUser = await res.json()
                this.user = newUser
                this.isAuthenticated = true

                localStorage.setItem('user', JSON.stringify(newUser))
                localStorage.setItem('isAuthenticated', 'true')
                return newUser
            } catch (err) {
                console.error('Registration error:', err)
                throw err
            }
        },

        async login(credentials) {
            try {
                if (!credentials.email) throw new Error('Email is required')
                if (!credentials.password) throw new Error('Password is required')

                const res = await fetch(`http://localhost:3000/users?email=${credentials.email}`)
                if (!res.ok) throw new Error('Login failed - server error')

                const users = await res.json()
                if (users.length === 0) {
                    throw new Error('Email not found')
                }

                const user = users[0]
                if (user.password !== credentials.password) {
                    throw new Error('Incorrect password')
                }

                this.user = user
                this.isAuthenticated = true

                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('isAuthenticated', 'true')

                return true
            } catch (err) {
                console.error('Login error:', err)
                throw err
            }
        },

        async logout() {
            try {
                this.user = null
                this.isAuthenticated = false

                localStorage.removeItem('user')
                localStorage.removeItem('isAuthenticated')

                return true
            } catch (err) {
                console.error('Logout error:', err)
                throw err
            }
        },
        async initializeUserData() {
            if (this.user && !this.user.wishlist) {
                this.user.wishlist = [];
                await this.updateUserData(this.user);
            }
        },
        async addToWishlist(classItem) {
            if (!this.isAuthenticated) {
                console.warn("User not authenticated - cannot add to wishlist");
                return;
            }
            
            try {
                await this.initializeUserData();
                
                // Ensure classItem has an ID
                if (!classItem.id) {
                    classItem.id = `${classItem.className}-${classItem.trainer}-${Date.now()}`;
                }
                
                // Check if already in wishlist
                if (this.user.wishlist.some(item => 
                    item.className === classItem.className && 
                    item.trainer === classItem.trainer
                )) {
                    console.log("Class already in wishlist");
                    return;
                }
                
                // Add to wishlist
                this.user.wishlist.push(classItem);
                await this.updateUserData(this.user);
                
                return true;
            } catch (error) {
                console.error('Error adding to wishlist:', error);
                throw error;
            }
        },

        async removeFromWishlist(classId) {
            if (!this.isAuthenticated) {
                console.warn("User not authenticated - cannot remove from wishlist");
                return;
            }
            
            try {
                await this.initializeUserData();
                
                this.user.wishlist = this.user.wishlist.filter(item => item.id !== classId);
                await this.updateUserData(this.user);
                
                return true;
            } catch (error) {
                console.error('Error removing from wishlist:', error);
                throw error;
            }
        },

        async fetchUserData() {
            const response = await fetch(`http://localhost:3000/users/${this.user.id}`);
            if (!response.ok) throw new Error('Failed to fetch user data');
            return await response.json();
        },

        async updateUserData(userData) {
            const response = await fetch(`http://localhost:3000/users/${this.user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) throw new Error('Failed to update user data');
        }
    }
})