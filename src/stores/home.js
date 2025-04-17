import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
    state: () => ({
        homeData: {}
    }),

    actions: {
        async fetchHomeData() {
            try {
                const res = await fetch('http://localhost:3000/homePage')
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                this.homeData = await res.json()
            } catch (err) {
                console.error('Error loading home data:', err)
            }
        }
    }
})