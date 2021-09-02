import template from './community.template'
import style from './community.css'

export class Community extends HTMLElement {
  static get selector () { return 'app-community' }

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
