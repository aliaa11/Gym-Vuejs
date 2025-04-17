import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
    state: () => ({
        heroData: null,
    }),

    actions: {
        async fetchHeroData() {
            try {
                const res = await fetch('http://localhost:3000/blog')
                if (!res.ok) {
                    throw new Error('Failed to load blog hero section.')
                }
                this.heroData = await res.json()
            } catch (err) {
                console.error('Error loading blog data:', err)
            }
        }
    }
})