import {createApp} from 'vue'
import myCounter from './myCounter.vue'

const counter = createApp(myCounter);
counter.mount('.my-counter');
