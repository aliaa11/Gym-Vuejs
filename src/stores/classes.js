import { defineStore } from 'pinia'

export const useClassesStore = defineStore('classes', {
    state: () => ({
        heroData: null,
    }),

    actions: {
        async fetchHeroData() {
            try {
                const res = await fetch('http://localhost:3000/Schedule')
                if (!res.ok) {
                    throw new Error('Failed to load class hero section.')
                }
                this.heroData = await res.json()
            } catch (err) {
                console.error('Error loading class data:', err)
            }
        }
    }
})