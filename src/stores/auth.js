// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false
    }),

    actions: {
        async register(userData) {
            const requiredFields = ['firstName', 'lastName', 'email', 'mobile', 'password'];
            const missing = requiredFields.filter(field => !userData[field]);

            if (missing.length > 0) throw new Error(`Missing: ${missing.join(', ')}`);

            const checkRes = await fetch(`http://localhost:3000/users?email=${userData.email}`);
            const existing = await checkRes.json();
            if (existing.length > 0) throw new Error('Email already registered');

            // 👇 Ensure wishlist is initialized
            const newUserPayload = {
                ...userData,
                wishlist: []
            };

            const res = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUserPayload)
            });

            if (!res.ok) throw new Error('Registration failed');

            const newUser = await res.json();
            this.user = newUser;
            this.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(newUser));
            localStorage.setItem('isAuthenticated', 'true');
            return newUser;
        },

        async login({ email, password }) {
            if (!email || !password) throw new Error('Missing credentials');

            const res = await fetch(`http://localhost:3000/users?email=${email}`);
            const users = await res.json();
            const user = users[0];

            if (!user) throw new Error('Email not found');
            if (user.password !== password) throw new Error('Incorrect password');

            this.user = user;
            this.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isAuthenticated', 'true');

            return user;

        },

        logout() {
            this.user = null;
            this.isAuthenticated = false;
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');
        },

        restoreSession() {
            const savedUser = localStorage.getItem('user');
            const isAuth = localStorage.getItem('isAuthenticated') === 'true';
            if (savedUser && isAuth) {
                this.user = JSON.parse(savedUser);
                this.isAuthenticated = true;
            }
        },

        async fetchUserData() {
            const res = await fetch(`http://localhost:3000/users/${this.user.id}`);
            if (!res.ok) throw new Error('Failed to fetch user');
            this.user = await res.json();
            localStorage.setItem('user', JSON.stringify(this.user));
        },

        async updateUserData(newUserData) {
            const res = await fetch(`http://localhost:3000/users/${this.user.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUserData)
            });
            if (!res.ok) throw new Error('Failed to update user');
        },

        async getWishlist() {
            await this.fetchUserData();
            return this.user.wishlist || [];
        },

        async addToWishlist(classItem) {
            if (!this.isAuthenticated) return;

            await this.fetchUserData();

            if (!classItem.id) {
                classItem.id = `${classItem.className}-${classItem.trainer}-${Date.now()}`;
            }

            const exists = this.user.wishlist.some(item =>
                item.className === classItem.className && item.trainer === classItem.trainer
            );

            if (exists) return;

            this.user.wishlist = [...(this.user.wishlist || []), classItem];
            await this.updateUserData(this.user);
            localStorage.setItem('user', JSON.stringify(this.user));
        },

        async removeFromWishlist(itemId) {
            if (!this.isAuthenticated) return;

            await this.fetchUserData();

            this.user.wishlist = (this.user.wishlist || []).filter(item => item.id !== itemId);
            await this.updateUserData(this.user);
            localStorage.setItem('user', JSON.stringify(this.user));
        }
    }
});