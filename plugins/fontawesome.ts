import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faFacebookSquare, faInstagram)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
