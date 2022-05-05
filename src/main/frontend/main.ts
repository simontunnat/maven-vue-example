import {createApp} from 'vue'
import MyApp from './components/MyApp.vue';
import MyCounter from './components/MyCounter.vue'

const app = createApp(MyApp);
app.mount('#my-app');

const counter = createApp(MyCounter);
counter.mount('.my-counter');
