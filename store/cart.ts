import { Item } from '~/firebase/item'

export interface CartItem {
  slug: string
  link: string
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
  add(state: State, item: Item) {
    const { slug, link, name, images, price } = item

    state.items = {
      ...state.items,
      [slug]: {
        slug,
        link,
        name,
        image: images[0],
        price,
      },
    }

    state.total += price
  },

  remove(state: State, item: CartItem) {
    const { [item.slug]: _, ...items } = state.items
    state.items = items
    state.total -= item.price
  },
}
