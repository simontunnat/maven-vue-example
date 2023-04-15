import {createApp} from 'vue'
import MyCounter from "../MyCounter/MyCounter.vue";
import MyParagraph from "../MyParagraph/MyParagraph.vue";

const containers = document.querySelectorAll("div[data-vue-app='MyRootComponent']");

containers.forEach((container) => {
  // If an app contains no template its innerHtml will be taken as its template
  // See: https://vuejs.org/guide/essentials/application.html#mounting-the-app
  const app = createApp({});
  app.component('MyCounter', MyCounter);
  app.component('MyParagraph', MyParagraph);
  app.mount(container);
});
