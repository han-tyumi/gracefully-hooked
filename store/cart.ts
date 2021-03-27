import { assoc, dissoc } from 'ramda'

export interface CartItem {
  slug: string
  name: string
  image: string
  price: number
}

export interface State {
  items: Record<string, CartItem | undefined>
}

export const state = (): State => ({
  items: {},
})

export const mutations = {
  add(state: State, item: CartItem) {
    state.items = assoc(item.slug, item, state.items)
  },
  remove(state: State, slug: string) {
    state.items = dissoc(slug, state.items)
  },
}
