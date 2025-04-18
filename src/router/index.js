import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Blog from '@/pages/Blog.vue'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'
import Class from '@/pages/class.vue'
import contact from '@/components/contact.vue'
import StripeCheckout from '@/components/StripeCheckout.vue'
import PaymentSuccess from '@/components/PaymentSuccess.vue'
import gallery from '@/components/gallery.vue'
import UserProfile from '@/components/UserProfile.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/signUp',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/classes',
        component: Class
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
    },
    {
        path: '/checkout/:sessionId/:planName/:price/:duration',
        name: 'StripeCheckout',
        component: StripeCheckout,
        props: true
    },
    {
        path: '/payment-success/:sessionId/:planName/:price/:duration',
        name: 'PaymentSuccess',
        component: PaymentSuccess,
        props: true
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: gallery
    },
    {
        path: '/profile',
        name: 'profile',
        component: UserProfile
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router