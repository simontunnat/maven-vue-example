import {createApp} from 'vue'
import MyCounter from './MyCounter.vue'

const counter = createApp(MyCounter);
counter.mount('.my-counter');
