import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
    state: () => ({
        heroData: null,
        homeData: {},
        storyData: null
    }),

    actions: {
        async fetchAboutData() {
            try {
                const [heroRes, storyRes, homeRes] = await Promise.all([
                    fetch('http://localhost:3000/heroSection'),
                    fetch('http://localhost:3000/story'),
                    fetch('http://localhost:3000/homePage')
                ])

                if (!heroRes.ok || !storyRes.ok || !homeRes.ok) {
                    throw new Error('Failed to load one or more parts of the About page.')
                }

                this.heroData = await heroRes.json()

                this.homeData = await homeRes.json()
            } catch (err) {
                console.error('Error loading About data:', err)
            }
        }
    }
})