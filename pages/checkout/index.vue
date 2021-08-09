<template>
  <div class="py-8">
    <div v-show="items.length" class="flex space-x-16 justify-center">
      <div class="flex flex-col">
        <CheckoutCart :items="items" />
      </div>

      <div class="flex flex-col">
        <h1 class="font-semibold text-xl mb-8">Subtotal: ${{ total }}</h1>

        <component
          :is="PayPalButtons"
          v-bind="{ createOrder, onApprove, onCancel, onError }"
        >
          <FontAwesomeIcon :icon="['fas', 'spinner']" fixed-width spin />
          Loading PayPal Buttons...
        </component>

        <p v-show="error" class="font-semibold text-lg text-red-600">
          PayPal Error:<br />{{ error }}
        </p>
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
import {
  defineComponent,
  computed,
  ref,
  useMeta,
  useRouter,
} from '@nuxtjs/composition-api'

import { useStore } from '~/store'
import {
  createOrder,
  CurrencyCode,
  onApprove,
  onCancel,
  onError,
} from '~/types/paypal'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()

    const items = computed(() => Object.values(store.state.cart.items))
    const total = computed(() => store.state.cart.total)
    const PayPalButtons = ref('div')
    const error = ref()

    useMeta({
      script: [
        {
          vmid: 'paypal',
          src: 'https://www.paypal.com/sdk/js?client-id=AeMnTTxCiQymVnHQkFSnsNJVSs7rXMmHh5hOUBvuJI6otKeibTnFZ-jnIcgXZo9_r9NUlv51h7hC9CGz&commit=false&enable-funding=venmo',
          defer: true,
          callback: () => {
            PayPalButtons.value = paypal.Buttons.driver('vue', Vue)
          },
        },
      ],
    })

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

    const onCancel: onCancel = () => {
      router.push('/checkout/cancel')
    }

    const onError: onError = (err) => {
      error.value = err
    }

    return {
      items,
      total,
      PayPalButtons,
      error,
      createOrder,
      onApprove,
      onCancel,
      onError,
    }
  },

  head: {},
})
</script>
