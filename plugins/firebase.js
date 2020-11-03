import * as firebase from 'firebase'


const config = {
    apiKey: "AIzaSyAJztOY8RPW0oimSg1SKBb2IGWuwcJKoas",
    authDomain: "discord-clone-58ac9.firebaseapp.com",
    databaseURL: "https://discord-clone-58ac9.firebaseio.com",
    projectId: "discord-clone-58ac9",
    storageBucket: "discord-clone-58ac9.appspot.com",
    messagingSenderId: "555231349723",
    appId: "1:555231349723:web:2c8bcd34dc19d490fe75fe",
    measurementId: "G-X3LDND9LY5"
  };

  !firebase.apps.length ? firebase.initializeApp(config) : ''
  
  const fireDb = firebase.firestore()

  export {fireDb}
