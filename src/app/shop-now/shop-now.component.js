import template from './shop-now.template'
import style from './shop-now.css'

export class ShopNow extends HTMLElement {
  static get selector () { return 'app-shop-now' }

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
