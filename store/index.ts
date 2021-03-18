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
