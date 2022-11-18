import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/app.scss'
import '@/assets/scss/app.css'
import '@/assets/scss/app.js'
import 'bootstrap'
import 'admin-lte'
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';
import { UploadMedia, UpdateMedia } from 'vue-media-upload';

createApp(App)
.use(store)
.use(router)
.component('upload-media' , UploadMedia)
.component('update-media' , UpdateMedia)
.mount('#app')
