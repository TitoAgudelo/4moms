import template from './services.template'
import style from './services.css'

export class Services extends HTMLElement {
  static get selector () { return 'app-services' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    const innerHTML = template({})

    this.element.innerHTML = `
      <style>${style}</style>
      ${innerHTML}
    `
  }
}
