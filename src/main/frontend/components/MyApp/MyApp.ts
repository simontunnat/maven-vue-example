import {createApp} from 'vue'
import MyApp from './MyApp.vue';

// without custom elements Vue.js components have to be specifically initialized
const app = createApp(MyApp);
app.mount('#my-app');
