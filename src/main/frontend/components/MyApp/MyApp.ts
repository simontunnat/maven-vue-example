import {createApp} from 'vue'
import MyApp from './MyApp.vue';

// This is kind of the default usage of Vue:
// A "app" component using other components and being mounted into a <div> element
const app = createApp(MyApp);
app.mount('.mount-app');
