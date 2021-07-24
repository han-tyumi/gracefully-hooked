import { useStore as baseUseStore } from '@nuxtjs/composition-api'
import { State as CartState } from './cart'
import { State as CacheState } from './cache'

export interface State {
  active: string | null
}

export const state = (): State => ({
  active: null,
})

export const mutations = {
  setActive(state: State, category: string) {
    state.active = category
  },
}

export interface RootState extends State {
  cart: CartState
  cache: CacheState
}

export function useStore() {
  return baseUseStore<RootState>()
}
