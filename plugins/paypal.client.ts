import Vue from 'vue'

const PayPalButtons = paypal.Buttons.driver('vue', Vue)

Vue.component('PayPalButtons', PayPalButtons)
