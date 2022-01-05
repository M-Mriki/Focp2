
import { searchResult } from '@/data/search'
// state
export const state = () => ({
  isMobile: false,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36'
})
// Getter
export const getters = {
  GetUserAgant (state) {
    return state.userAgent
  },
  GetIsMobile (state) {
    return state.isMobile
  }
}

export const namespaced = true
// Mutation
export const mutations = {
  Set_showMobile (state, isMobile) {
    state.isMobile = isMobile
  },
  Set_UserAgant (state, userAgent) {
    state.userAgent = userAgent
  }
}

// Actions
export const actions = {
  search ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      resolve(searchResult)
    })
  }
}
