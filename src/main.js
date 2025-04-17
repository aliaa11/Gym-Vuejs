import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
const authStore = useAuthStore()

const savedUser = localStorage.getItem('user')
if (savedUser) {
  authStore.user = JSON.parse(savedUser)
  authStore.isAuthenticated = true
}