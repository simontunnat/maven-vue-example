import {defineCustomElement} from 'vue'
import myParagraph from "./myParagraph.ce.vue";

const myParagraphElement = defineCustomElement(myParagraph);
customElements.define('my-paragraph', myParagraphElement);

// custom elements can be added to the DOM through JS like any other HTML element
document.body.appendChild(
  new myParagraphElement({
    text: 'One more paragraph'
  })
)
