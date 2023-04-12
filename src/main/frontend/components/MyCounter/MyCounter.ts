import {createApp} from 'vue'
import MyCounter from './MyCounter.vue'

// Vue also allows to mount multiple / many apps on the same page
const app = createApp(MyCounter);
app.mount('.mount-counter');
