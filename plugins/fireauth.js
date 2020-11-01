import * as firebase from 'firebase'
const auth = firebase.auth();

export default context => {
  const { store } = context


firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      store.commit(`USER_DETAILS`, user);
    } else {
      store.commit(`LOGOUT`);
    }
  })

  // return new Promise((resolve, reject) => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       return resolve(store.commit('ON_AUTH_STATE_CHANGED_MUTATION', user))
  //     }
  //     return resolve()
  //   })
  // })

  // return () => {
  //   auth.onAuthStateChanged(user => {
  //         if (user) {
  //         store.commit('ON_AUTH_STATE_CHANGED_MUTATION', user)
  //         console.log('Work')
  //         } else {
         
  //         }
         
  //       }) 
  // }
}