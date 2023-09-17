import {defineCustomElement} from 'vue'
import MyCounter from "../components/MyCounter/MyCounter.vue";
import MyParagraph from "../components/MyParagraph/MyParagraph.vue";

// Vue components can be used as web components
customElements.define('my-counter-web-component', defineCustomElement(MyCounter));
customElements.define('my-paragraph-web-component', defineCustomElement(MyParagraph));
