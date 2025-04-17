import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Blog from '@/pages/Blog.vue'
import Register from '@/pages/Register.vue'
import Class from '@/pages/class.vue'
import Contact from '@/components/contact.vue'
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
        path:'/signUp',
        name:'Register',
        component:Register
    },
    {
        path:'/classes',
        component:Class
    }
    ,
    {
        path:'/contact',
        name:'Contact',
        component: Contact
    }

]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router