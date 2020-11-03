import * as firebase from 'firebase/app'

const config = {"apiKey":"AIzaSyAJztOY8RPW0oimSg1SKBb2IGWuwcJKoas","authDomain":"discord-clone-58ac9.firebaseapp.com","databaseURL":"https:\u002F\u002Fdiscord-clone-58ac9.firebaseio.com","projectId":"discord-clone-58ac9","storageBucket":"discord-clone-58ac9.appspot.com","messagingSenderId":"555231349723","appId":"1:555231349723:web:2c8bcd34dc19d490fe75fe","measurementId":"G-X3LDND9LY5"}

export default async ({ res }, inject) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  const session = firebase.apps[0]

  /** --------------------------------------------------------------------------------------------- **/
  /** -------------------------------------- FIREBASE AUTH ---------------------------------------- **/
  /** --------------------------------------------------------------------------------------------- **/

  await import(/* webpackChunkName: 'firebase-auth' */'firebase/auth')

  const fireAuth = session.auth()
  const fireAuthObj = firebase.auth
  inject('fireAuth', fireAuth)
  inject('fireAuthObj', fireAuthObj)

  // persistence should only be enabled client side
  if (process.client) {
    const persistence = firebase.auth.Auth.Persistence.LOCAL

    try {
      await fireAuth.setPersistence(persistence)
    } catch (err) {
      if (err.code === 'auth/invalid-persistence-type') {
        console.warn(`[@nuxtjs/firebase]: Invalid persistence type '${persistence}' provided`)
      } else if (err.code === 'auth/unsupported-persistence-type') {
        console.warn(`[@nuxtjs/firebase]: Persistence type '${persistence}' is not supported in this environment.`)
      }
    }
  }

  /** --------------------------------------------------------------------------------------------- **/
  /** ------------------------------------- FIREBASE FIRESTORE ------------------------------------ **/
  /** --------------------------------------------------------------------------------------------- **/

  await import(/* webpackChunkName: 'firebase-auth' */'firebase/firestore')

  const fireStore = session.firestore()
  const fireStoreObj = firebase.firestore
  inject('fireStore', fireStore)
  inject('fireStoreObj', fireStoreObj)

  // persistence should only be enabled client side
  if (process.client) {
    try {
      await fireStore.enablePersistence({})
    } catch (err) {
      if (err.code == 'failed-precondition') {
        console.warn('[@nuxtjs/firebase]: Firestore Persistence not enabled. Multiple tabs open, persistence can only be enabled in one tab at a a time.')
      } else if (err.code == 'unimplemented') {
        console.info('[@nuxtjs/firebase]: Firestore Persistence not enabled. The current browser does not support all of the features required to enable persistence.')
      }
    }
  }
}
