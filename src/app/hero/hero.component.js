import template from './hero.template'
import style from './hero.css'

export class Hero extends HTMLElement {
  static get selector () { return 'app-hero' }

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
