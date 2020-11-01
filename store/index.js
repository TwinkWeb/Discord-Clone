import * as firebase from 'firebase'


export const state = () => ({
  userProfile: {},
  token: null
})


export const getters = {
  userProfile: ({userProfile}) => userProfile,
  hasToken: s => !!s.token
};

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
    if (!authUser) {
      state.userProfile = {}
      state.token = null
      console.log(state.token)
    } else {
      state.userProfile = {
      name: authUser.displayName,
      id: authUser.uid
    }
     state.token = 'true'
     console.log(state.token)
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
