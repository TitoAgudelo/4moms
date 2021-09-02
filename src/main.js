import { AppointmentComponent } from './app/appointment/appointment.component'
import { Navigation } from './app/navigation/navigation.component'
import { Header } from './app/header/header.component'
import { Bartab } from './app/bar/bar.component'
import { Hero } from './app/hero/hero.component'
import { Services } from './app/services/services.component'
import { Shop } from './app/shop/shop.component'
import { ShopNow } from './app/shop-now/shop-now.component'
import { Playards } from './app/playards/playards.component'

const components = [
  Header,
  Bartab,
  Navigation,
  Hero,
  Services,
  Shop,
  ShopNow,
  Playards,
  AppointmentComponent
]

components.forEach(component => customElements.define(component.selector, component))
