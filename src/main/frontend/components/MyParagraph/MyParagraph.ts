import {defineCustomElement} from 'vue'
import MyParagraph from "./MyParagraph.vue";

// Vue components can be used as web components, which makes the mount simpler
const MyParagraphElement = defineCustomElement(MyParagraph);
customElements.define('my-paragraph-element', MyParagraphElement);

// Web components can be added to the DOM through JS like any other HTML element
document.body.appendChild(
  new MyParagraphElement({
    text: 'One more paragraph (web component)'
  })
)
