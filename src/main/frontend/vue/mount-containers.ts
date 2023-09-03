import {createApp} from 'vue'
import MyCounter from "../components/MyCounter/MyCounter.vue";
import MyParagraph from "../components/MyParagraph/MyParagraph.vue";

const containers = document.querySelectorAll("div[data-vue-app='MyContainer']");

containers.forEach((container) => {
  // If an app contains no template its innerHtml will be taken as its template
  // See: https://vuejs.org/guide/essentials/application.html#mounting-the-app
  const app = createApp({
    components: {
      MyCounter,
      MyParagraph
    }
  });
  app.mount(container);
});
