import axios from 'axios'
import constants from '~/constants/nietalleen-api'

export const state = () => {
  return {
    list: []
  }
}

export const mutations = {
  ADD (state, city) {
    state.list.push(city)
  },
  EMPTY (state) {
    state.list = []
  }
}

export const actions = {
  async fetchCities ({ commit, state }) {
    if (state.list.length === 0) {
      await axios.get(`${constants.NIETALLEEN_API_HOST}/${constants.NIETALLEEN_API_ENDPOINT_LOCATIONS}`)
        .then((result) => {
          if (state.list.length !== result.data.items.length) {
            commit('EMPTY')
            for (const cityData of result.data.items) {
              commit('ADD', cityData.city)
            }
          }
        })
    }
  }
}
