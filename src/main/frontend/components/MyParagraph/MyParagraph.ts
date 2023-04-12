import {defineCustomElement} from 'vue'
import MyParagraph from "./MyParagraph.vue";

const MyParagraphElement = defineCustomElement(MyParagraph);
customElements.define('my-paragraph', MyParagraphElement);

// custom elements can be added to the DOM through JS like any other HTML element
document.body.appendChild(
  new MyParagraphElement({
    text: 'One more paragraph (web component)'
  })
)
