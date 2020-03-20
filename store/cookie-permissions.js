export const state = () => ({
  list: []
})

export const mutations = {
  add (state, permission) {
    state.list.push(permission)
  }
}
