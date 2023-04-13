import {defineCustomElement} from 'vue'
import MyCounter from "../MyCounter/MyCounter.vue";

// Vue components can be used as web components
const customElement = defineCustomElement(MyCounter);
customElements.define('my-counter-web-component', customElement);
