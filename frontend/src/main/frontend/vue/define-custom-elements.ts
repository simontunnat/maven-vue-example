import {defineCustomElement} from 'vue'
import MyCounter from "../components/MyCounter/MyCounter.vue";
import MyParagraph from "../components/MyParagraph/MyParagraph.vue";

// Vue components can be used as web components
customElements.define('my-counter-web-component', defineCustomElement(MyCounter));
customElements.define('my-paragraph-web-component', defineCustomElement(MyParagraph));

customElements.define('my-counter-web-component-no-shadow-root', defineCustomElement(MyCounter,{
  shadowRoot: false
}));
customElements.define('my-paragraph-web-component-no-shadow-root', defineCustomElement(MyParagraph, {
  shadowRoot: false
}));
