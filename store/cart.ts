import { assoc, dissoc } from 'ramda'

export interface CartItem {
  slug: string
  name: string
  image: string
  price: number
}

export interface State {
  items: Record<string, CartItem>
  total: number
}

export const state = (): State => ({
  items: {},
  total: 0,
})

export const mutations = {
  add(state: State, item: CartItem) {
    state.items = assoc(item.slug, item, state.items)
    state.total += item.price
  },
  remove(state: State, item: CartItem) {
    state.items = dissoc(item.slug, state.items)
    state.total -= item.price
  },
}
