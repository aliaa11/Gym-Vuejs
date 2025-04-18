import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Oa1apC2Y3Ne3oUhz8quAdzU0O1aAgoTSP0wwiEMbUqZDd0knNgOnMSyU3Us4s05QjCdwvqmxA2EDGAT3Mj9a3kj00BKiR5q83');

export default {
    async createCheckoutSession(plan) {
        try {
            // Create a record in your db.json file
            const sessionResponse = await axios.post('http://localhost:3000/checkout-sessions', {
                id: `session_${Date.now()}`,
                planId: plan.name.toLowerCase(),
                planName: plan.name,
                price: parseFloat(plan.price) * 100,
                status: 'pending',
                createdAt: new Date().toISOString()
            });

            const session = sessionResponse.data;

            return {
                sessionId: session.id,
                plan: plan
            };
        } catch (error) {
            console.error('Error creating checkout session:', error);
            throw new Error('Failed to create checkout session');
        }
    },

    async redirectToCheckout(sessionData) {
        try {

            return sessionData;
        } catch (error) {
            console.error('Error redirecting to checkout:', error);
            throw new Error('Failed to redirect to checkout');
        }
    }
};