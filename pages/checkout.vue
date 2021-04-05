<template lang="pug">
.py-8
  .flex.justify-center.space-x-16(v-if="items.length")
    .flex.flex-col
      CheckoutCart(:items="items")
    .flex.flex-col.space-y-8
      h1.text-xl.font-semibold Subtotal: ${{ total }}
      PayPalButton(v-bind="{ createOrder, onApprove }")
  .flex.flex-col.items-center.space-y-4(v-else)
    p.text-xl No Items In Your Bag
    NuxtLink(to="/shop/"): Button Shop All
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useStore } from '~/store'

export default defineComponent({
  setup() {
    const store = useStore()

    const items = computed(() => Object.values(store.state.cart.items))
    const total = computed(() => store.state.cart.total)

    const createOrder = (_: any, actions: any) => {
      // eslint-disable-next-line camelcase
      const currency_code = 'USD'

      return actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code,
              value: total.value,

              breakdown: {
                item_total: {
                  currency_code,
                  value: total.value,
                },
              },
            },

            items: items.value.map((item) => ({
              name: item.name,

              unit_amount: {
                currency_code,
                value: item.price,
              },

              quantity: 1,
              category: 'PHYSICAL_GOODS',
            })),
          },
        ],
      })
    }

    const onApprove = async (_: any, actions: any) => {
      const details = await actions.order.capture()
      alert(JSON.stringify(details))
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
