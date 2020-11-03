import * as firebase from 'firebase'
import {fireDb} from '~/plugins/firebase.js'



export const state = () => ({
  userProfile: {},
  token: null,
  channelName: '',
  messages: []
})


export const getters = {
  userProfile: ({userProfile}) => userProfile,
  hasToken: s => !!s.token,
  channelName: s => s.channelName,
  messages: s => s.messages
};

export const mutations = {
  setChannelName(state, payload) {
   state.channelName = payload
  },

  GET_MESSAGES(state, payload) {
    fireDb.collection("test")
   .doc(payload)
   .collection('messages')
   .orderBy("timestamp")
   .onSnapshot((snapshot) => {
    state.messages = snapshot.docs.map((doc) => doc.data())
    console.log(state.userProfile)
    })
  },

  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
    if (!authUser) {
      state.userProfile = {}
      state.token = null
    } else {
      state.userProfile = {
      name: authUser.displayName,
      id: authUser.uid,
    }
     state.token = 'true'
    };
  },

};

export const actions = {
  async login(store) {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch(error) {
      console.log(error);
    }
  },

  

  async logout() {
    try {
      await firebase.auth().signOut();
    } catch(error) {
      console.log(error);
    }
  }
};
