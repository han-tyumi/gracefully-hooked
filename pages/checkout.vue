<template>
  <div class="py-8">
    <div v-show="items.length" class="flex justify-center space-x-16">
      <div class="flex flex-col">
        <CheckoutCart :items="items" />
      </div>

      <div class="flex flex-col space-y-8">
        <h1 class="text-xl font-semibold">Subtotal: ${{ total }}</h1>
        <PayPalButtons v-bind="{ createOrder, onApprove }" />
      </div>
    </div>

    <div v-show="!items.length" class="flex flex-col items-center space-y-4">
      <p class="text-xl">No Items In Your Bag</p>
      <NuxtLink to="/shop/">
        <Button>Shop All</Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useStore } from '~/store'

export default defineComponent({
  setup() {
    const store = useStore()

    const items = computed(() => Object.values(store.state.cart.items))
    const total = computed(() => store.state.cart.total)

    const createOrder: PayPal.createOrder = (_, actions) => {
      // eslint-disable-next-line camelcase
      const currency_code = PayPal.CurrencyCode.USD

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

    const onApprove: PayPal.onApprove = async (_, actions) => {
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
