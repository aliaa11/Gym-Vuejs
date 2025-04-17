import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Blog from '@/pages/Blog.vue'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'
import Class from '@/pages/class.vue'
import contact from '@/components/contact.vue'
import gallery from '@/components/gallery.vue'

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
        name:'contact',
        component: contact
    },
    
    {
        path:'/gallery',
        name:'gallery',
        component:gallery
    }

]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router