import template from './navigation.template'
import style from './navigation.css'

export class Navigation extends HTMLElement {
  static get selector () { return 'app-navigation' }

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
