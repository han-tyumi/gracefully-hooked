import Vue from 'vue'

const PayPalButton = paypal.Buttons.driver('vue', Vue)

Vue.component('PayPalButton', PayPalButton)
