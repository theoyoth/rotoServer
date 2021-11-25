import Vue from 'vue'
import VueHtmlToPaper from 'vue-html-to-paper'

const options = {
  name: '_blank',
  specs: ['fullscreen=yes', 'titlebar=yes', 'scrollbars=yes'],
  styles: ['/assets/css/printer.css'],
}

Vue.use(VueHtmlToPaper, options)
// or using the defaults with no stylesheet
Vue.use(VueHtmlToPaper)
