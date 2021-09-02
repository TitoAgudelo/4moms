import template from './shop.template'
import style from './shop.css'

const shops = [
  {
    name: 'Shop Seats',
    image: '/assets/1.png',
    with: 267,
    height: 417
  },
  {
    name: 'Shop Playards',
    image: '/assets/2.png',
    with: 490,
    height: 353
  },
  {
    name: 'Shop Feeding',
    image: '/assets/3.png',
    with: 523,
    height: 821
  },
  {
    name: 'Shop Bassinets',
    image: '/assets/4.png',
    with: 500,
    height: 511
  },
  {
    name: 'Shop Tubs',
    image: '/assets/5.png',
    with: 593,
    height: 592
  },
  {
    name: 'Shop Mobiles',
    image: '/assets/6.png',
    with: 367,
    height: 471
  }
]


export class Shop extends HTMLElement {
  static get selector () { return 'app-shop' }

  connectedCallback () {
    this.element = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render () {
    const innerHTML = template({ shops })

    this.element.innerHTML = `
      <style>${style}</style>
      ${innerHTML}
    `
  }
}
