import template from './playards.template'
import style from './playards.css'

export class Playards extends HTMLElement {
  static get selector () { return 'app-playards' }

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
