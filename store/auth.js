export const state = () => {
    user: null
}

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, payload) => {
       state.user = payload
      console.log()
      }
}

