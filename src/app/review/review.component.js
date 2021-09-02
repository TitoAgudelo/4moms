import template from './review.template'
import style from './review.css'

export class Review extends HTMLElement {
  static get selector () { return 'app-review' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    const innerHTML = template()

    this.element.innerHTML = `
      <style>${style}</style>
      ${innerHTML}
    `
  }
}
