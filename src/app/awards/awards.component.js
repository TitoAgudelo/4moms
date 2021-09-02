import template from './awards.template'
import style from './awards.css'

export class Awards extends HTMLElement {
  static get selector () { return 'app-awards' }

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
