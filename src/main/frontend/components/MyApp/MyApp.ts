import {createApp} from 'vue'
import MyApp from './MyApp.vue';

// without web component Vue.js components have to be specifically initialized
const app = createApp(MyApp);
app.mount('.mount-app');
