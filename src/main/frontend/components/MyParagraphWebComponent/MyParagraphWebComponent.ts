import {defineCustomElement} from 'vue'
import MyParagraph from "../MyParagraph/MyParagraph.vue";

// Vue components can be used as web components
const customElement = defineCustomElement(MyParagraph);
customElements.define('my-paragraph-web-component', customElement);
