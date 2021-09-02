# 4moms Web Components

### overview
[Custom Elements with ES6
Web components

Evolve markup into something similar than frameworks manage. hight performance, maintainable, and highly modular. Thanks to these custom elements we have improved the way to building apps, also we gain better overall structure, design, and reusability of our code.
Custom elements provide a way for authors to build their own fully-features DOM elements, Although authors can use a non-standard elements in their documents. Today exist a many limitations on functionality — browse support and semantically — that prevent the expect behaviors of DOM existing elements.
Basic boilerplate
Basic boilerplate on custom elements is easy declared a class feature, the principal goal is to subclassing objects, and exchange argument between custom components. Currently, DOM objects don’t have callable constructor, so is necessary to deal with these limitations.
class CustomElement extends HTMLElement {           
     //  construct the original item to be extended
     constructor() {};
} 
Lifecycle callbacks
You can use these callback lifecycle if you need additional DOM events
// Fires when an instance of the element is created.
     createdCallback() {};
// Fires when an instance was inserted into the document.
     attachedCallback() {};
     
     // Fires when an instance was removed from the document.
     detachedCallback() {};
// Fires when an attribute was added, removed, or updated.
     attributeChangedCallback(attr, oldVal, newVal) {};
Shadow DOM provides encapsulation for DOM and CSS in a Web Component. Shadow DOM makes the both things in an embed object tag with its own style and HTML.
So how do we create a shadow DOM element in our code example? Let me show you how.
constructor () {
    this.element = this.attachShadow({ mode: 'open' })
}
It’s a example of shadow element represented in our html, it contain a appointment app root of the our app, inside you can find a style HTML tag just contain styles for our component because shadow elements creates an embed element where styles only apply within this new html element

But web components can simply use the constructor and make an inner of the content that we want to add there in our constructor or similar function for render, ES6 provide a new way to use templates with `` Template literals and include all content of our HTML static or dynamic content there
this.innerHTML = `${template}`
document.registerElement('custom-element', CustomElement);
Definition of DOM element, when the connectedCallback function is called and the shadow element is created in the DOM, it is usually called a render and init data function that will be in charge of taking the template and are passed here initialized property of this custom element. Then when DOM is ready on the inner element, it is called an event listeners.
import template from './appointment.template'
import style from './appointment.css'
export class AppointmentComponent extends HTMLElement {
render () {
    const innerHTML = template({
      date: new Date(),
      age: this.age,
    })
    this.element.innerHTML = `
      <style>${style}</style>
      ${innerHTML}
    `
    this.addEventListeners()
  }
The style file is based on components, a file embedded within the component to be created, each file uses a template that can contain a logical layer or simply be an html file, if you use a js template you can dynamically use javascript elements to assign variables.
export default ({ date, age }) => {
    return `
      <h1>Today is ${date} and I have ${age} years old.</h1>
    `
}
or make loops of html elements.
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export default () => {
return `
 <ul class="datepicker-nav">
    ${weekdays.map(day => `
      <li>${day}</li>
    `).join('')}
 </ul>
 `
}
import { firstComponent } from './app/firstComponent/first.component'
import { secondComponent } from './app/secondComponent/second.component'
import { rootComponent } from './app/rootComponent/root.component'
const components = [
  firstComponent,
  secondComponent,
  rootComponent
]
components.forEach(component => customElements.define(component.selector, component))

## Prerequisites
- [Yarn](https://yarnpkg.com/lang/en/) fast, reliable, and secure dependency management.
yarn (brew update & brew install yarn)

- [Webpack](https://webpack.js.org/) module bundler ...
webpack (yarn add --dev webpack)

## Getting Started

Run in terminal

- yarn (to install dependencies)
- yarn build (build webpack)
- yarn start (run python serve)

Test & build watch

- yarn build:watch (webpack --watch)
- yarn test (karma test)