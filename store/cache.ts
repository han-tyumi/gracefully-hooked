import { Item } from '~/firebase/types'

export interface State {
  [slug: string]: Item
}

export const state = (): State => ({})

export const mutations = {
  add(state: State, items: Item[]) {
    for (const item of items) {
      state[item.slug] = item
    }
  },
}
