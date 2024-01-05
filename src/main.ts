import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/templatemo-tiya-golf-club.css'
import 'bootstrap-icons/font/fonts/bootstrap-icons.woff'
import 'bootstrap-icons/font/fonts/bootstrap-icons.woff2'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
