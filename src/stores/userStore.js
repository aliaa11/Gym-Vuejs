import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userData: null,
        subscription: null,
        messages: [],
        loading: false,
        error: null
    }),

    getters: {
        isLoggedIn: (state) => !!state.userData,
        fullName: (state) => state.userData ? `${state.userData.firstName} ${state.userData.lastName}` : '',
        formattedDates: (state) => {
            if (!state.subscription) return { start: '', end: '' };

            const startDate = new Date(state.subscription.startDate);
            const endDate = new Date(state.subscription.endDate);

            return {
                start: startDate.toLocaleDateString(),
                end: endDate.toLocaleDateString()
            };
        }
    },

    actions: {
        async fetchMessages() {
            this.loading = true;
            try {
                const res = await fetch('http://localhost:3000/messages');
                const data = await res.json();
                console.log("data", data);

                const userEmail = this.userData.email;
                this.messages = (data || []).filter(msg => msg.email === userEmail);

                console.log("filtered messages", this.messages);
            } catch (err) {
                this.error = 'Failed to fetch messages.';
            } finally {
                this.loading = false;
            }
        },
        loadUserData() {
            try {
                const userData = localStorage.getItem('user');
                if (userData) {
                    this.userData = JSON.parse(userData);
                }
            } catch (error) {
                console.error('Error loading user data:', error);
                this.error = 'Failed to load user data';
            }
        },

        async fetchSubscription() {
            if (!this.userData) return;

            this.loading = true;
            this.error = null;

            try {

                const response = await fetch('http://localhost:3000/subscriptions');
                const data = await response.json();

                console.log("Fetched subscription data:", data);

                if (Array.isArray(data)) {
                    const userSubscription = data.find(
                        sub => sub.customer.email === this.userData.email
                    );
                    console.log("User subscription:", userSubscription);
                    this.subscription = userSubscription;
                } else {
                    console.error("Expected an array but got:", data);
                }
            } catch (error) {
                console.error('Error fetching subscription:', error);
                this.error = 'Failed to load subscription data';
            } finally {
                this.loading = false;
            }
        },
        async cancelSubscription() {
            if (!this.subscription) return;

            this.loading = true;
            this.error = null;

            try {
                const response = await fetch(`http://localhost:3000/subscriptions/${this.subscription.id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    console.log('Subscription deleted successfully');
                    this.subscription = null;
                } else {
                    throw new Error('Failed to delete subscription');
                }
            } catch (error) {
                console.error('Error deleting subscription:', error);
                this.error = 'Failed to cancel subscription';
            } finally {
                this.loading = false;
            }
        }

    }
});