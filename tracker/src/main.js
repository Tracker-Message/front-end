import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css';
import Editor from '@tinymce/tinymce-vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

