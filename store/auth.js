export const state = () => {
    user: null
}

export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    
      console.log(authUser)
        // Do this:
        const { uid, email, emailVerified } = authUser
        state.user = { uid, email, emailVerified }
      }
}

export const actions = {
    onAuthStateChangedAction: (ctx, { authUser, claims }) => {
        if (authUser) {
          console.log('1')
          // claims = null
          // Perform logout operations
        } else {
          console.log(authUser)
          // Do something with the authUser and the claims object...
        }
      }
}