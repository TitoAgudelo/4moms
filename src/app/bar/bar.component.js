import template from './bar.template'
import style from './bar.css'

export class Bartab extends HTMLElement {
  static get selector () { return 'app-bartab' }

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
