import {createApp} from 'vue'
import MyApp from '../components/MyApp/MyApp.vue';

// This is kind of the default usage of Vue:
// A "app" component using other components and being mounted into a <div> element
const container = document.querySelector('div[data-vue-app]');

if(container) {
  const app = createApp(MyApp);
  app.mount(container);
}
