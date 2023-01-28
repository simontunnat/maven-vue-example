import {createApp} from 'vue'
import myApp from './myApp.vue';

// without custom elements Vue.js components have to be specifically initialized
const app = createApp(myApp);
app.mount('#my-app');
