import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSearch,
  faShoppingBag,
  faCaretRight,
  faTimes,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faSearch,
  faShoppingBag,
  faCaretRight,
  faFacebookSquare,
  faInstagram,
  faTimes,
  faSpinner
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
