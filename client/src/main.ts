import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
  .then(() => {
    initShsSideNav()
  })
});

let initShsSideNav = () => {
  let callBack = () => {
    if (!document.querySelector('.shs-side-nav')) return
    let nav = document.getElementById('js-nav')
    let bottom_nav = document.getElementById('js-nav--bottom')
    let top_nav = document.getElementById('js-nav--top')
    let cutoff = parseInt(window.getComputedStyle(nav).top)
    let minus = bottom_nav.getBoundingClientRect().top-cutoff
    let plus = top_nav.getBoundingClientRect().top-cutoff
    if (minus < 0) {
      nav.classList.remove('js-on')
      bottom_nav.classList.add('js-on')
      top_nav.classList.remove('js-on')
    } else if (plus > 0) {
      nav.classList.remove('js-on')
      bottom_nav.classList.remove('js-on')
      top_nav.classList.add('js-on')
    } else {
      nav.classList.add('js-on')
      bottom_nav.classList.remove('js-on')
      top_nav.classList.remove('js-on')
    }
  }
  let events = ['scroll', 'resize']
  events.forEach(x => window.addEventListener(x, callBack))
}
