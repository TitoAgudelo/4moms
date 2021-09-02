import template from './header.template'
import style from './header.css'

export class Header extends HTMLElement {
  static get selector () { return 'app-header' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    const innerHTML = template({
      selectedFilter: this.getAttribute('filter'),
    })

    this.element.innerHTML = `
      <style>${style}</style>
      ${innerHTML}
    `

    this.addEventListeners()
  }

  addEventListeners () {
    this.element.querySelectorAll('input')
      .forEach(element => element.addEventListener('change', () => this.selectFilter(element.value)))
  }

  selectFilter (filter) {
    this.dispatchEvent(new CustomEvent('selected-filter', { detail: filter }))
  }
}
