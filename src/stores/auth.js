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
        }
  }
})