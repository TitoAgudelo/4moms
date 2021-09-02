import template from './learn.template'
import style from './learn.css'

export class Learn extends HTMLElement {
  static get selector () { return 'app-learn' }

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
