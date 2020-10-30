import * as firebase from 'firebase'
const auth = firebase.auth();

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
        console.log(user)
      if (user) {
        return resolve(store.commit('auth/ON_AUTH_STATE_CHANGED_MUTATION', user))
      }
      return resolve()
    })
  })
}