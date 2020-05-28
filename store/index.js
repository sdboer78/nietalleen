export const actions = {
  nuxtServerInit ({ dispatch }) {
    dispatch('cities/fetchCities')
  }
}
