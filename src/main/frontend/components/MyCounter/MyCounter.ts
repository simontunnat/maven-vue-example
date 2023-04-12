import {createApp} from 'vue'
import MyCounter from './MyCounter.vue'

// without web component Vue.js components have to be specifically initialized
const app = createApp(MyCounter);
app.mount('.mount-counter');
