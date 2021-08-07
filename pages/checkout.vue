<template>
  <div class="py-8">
    <div v-show="items.length" class="flex space-x-16 justify-center">
      <div class="flex flex-col">
        <CheckoutCart :items="items" />
      </div>

      <div class="flex flex-col space-y-8">
        <h1 class="font-semibold text-xl">Subtotal: ${{ total }}</h1>
        <PayPalButtons v-bind="{ createOrder, onApprove }" />
      </div>
    </div>

    <div v-show="!items.length" class="flex flex-col space-y-4 items-center">
      <p class="text-xl">No Items In Your Bag</p>
      <NuxtLink to="/shop">
        <Button>Shop All</Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, computed } from '@nuxtjs/composition-api'

import { useStore } from '~/store'
import { createOrder, CurrencyCode, onApprove } from '~/types/paypal'

const PayPalButtons = paypal.Buttons.driver('vue', Vue)

export default defineComponent({
  components: {
    PayPalButtons,
  },

  setup() {
    const store = useStore()

    const items = computed(() => Object.values(store.state.cart.items))
    const total = computed(() => store.state.cart.total)

    const createOrder: createOrder = (_, actions) => {
      // eslint-disable-next-line camelcase
      const currency_code = CurrencyCode.USD

      return actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code,
              value: total.value.toString(),

              breakdown: {
                item_total: {
                  currency_code,
                  value: total.value.toString(),
                },
              },
            },

            items: items.value.map((item) => ({
              name: item.name,

              unit_amount: {
                currency_code,
                value: item.price.toString(),
              },

              quantity: '1',
              category: 'PHYSICAL_GOODS',
            })),
          },
        ],
      })
    }

    const onApprove: onApprove = async (_, actions) => {
      const details = await actions.order.capture()
      console.log(details)
    }

    return {
      items,
      total,
      createOrder,
      onApprove,
    }
  },
})
</script>
