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
    state.items = { ...state.items, [item.slug]: item }
    state.total += item.price
  },
  remove(state: State, item: CartItem) {
    const { [item.slug]: _, ...stateItems } = state.items
    state.items = stateItems
    state.total -= item.price
  },
}
