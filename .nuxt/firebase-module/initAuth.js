export default async ({ store, app }, inject) => {
  // Sets up a listener, mutations and action for every onAuthStateChanged by Firebase.
  // AND runs the functions once BEFORE the root Vue.js Application is instantiated.

  const unsubscribe = await new Promise(resolve => {
    const unsubscribe = app.$fireAuth.onAuthStateChanged(async authUser => {
      const claims = authUser ? (await authUser.getIdTokenResult(true)).claims : null

      store.commit("ON_AUTH_STATE_CHANGED_MUTATION", { authUser, claims })

      resolve(unsubscribe)
    })
  })

  inject('fireAuthUnsubscribe', unsubscribe)
}
