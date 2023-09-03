import {createApp} from 'vue'
import MyApp from '../components/MyApp/MyApp.vue';

// This is kind of the default usage of Vue:
// A "app" component using other components and being mounted into a <div> element
const app = createApp(MyApp);
app.mount("div[data-vue-app='MyApp']");
