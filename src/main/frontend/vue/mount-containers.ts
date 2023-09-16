import {createApp} from 'vue'
import MyCounter from "../components/MyCounter/MyCounter.vue";
import MyParagraph from "../components/MyParagraph/MyParagraph.vue";

const appContainers = document.querySelectorAll("div[data-vue-container]");

const components = {
  MyCounter,
  MyParagraph
};

function getTemplateFromTemplateOrScriptChildElement(appContainer: Element) {
  // If the container element has a template child element use that one
  const templateElement = appContainer.querySelector('template');
  const scriptElement = appContainer.querySelector('script[type="text/x-template"]');

  if (templateElement) {
    return templateElement.innerHTML;
  }

  if (scriptElement) {
    return scriptElement.innerHTML;
  }

  return '';
}

appContainers.forEach((appContainer) => {
  const template = getTemplateFromTemplateOrScriptChildElement(appContainer);

  // If an app contains no template its innerHtml will be taken as its template
  // See: https://vuejs.org/guide/essentials/application.html#mounting-the-app
  const app = createApp({
    components: components,
    template: template
  });
  app.mount(appContainer);
});
