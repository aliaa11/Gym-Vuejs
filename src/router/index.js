import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Blog from '@/pages/Blog.vue'
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
        path: '/classes',
        name: 'Classes',
        component: Class
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