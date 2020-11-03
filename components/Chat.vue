<template>
    <div class="chat">
     <ChatHeader />

      <div class="chat__messages">
      <Message v-for="(message, index) in messages" 
      :key="index" 
      :message="message.message"
      :timestamp="message.timestamp"
       />
      </div>

      <div class="chat__input">
       <i class="material-icons md-18">add_circle</i>
       <form action="">
            <input
            :disabled='!$store.state.channelName'
            v-model="message"
              :placeholder="'Message in ' + this.$store.getters.channelName" />
            <button @click.prevent="addChannel" class="chat__inputButton" type="submit">Send message</button>
       </form>
     
      <div class="chat__inputIcons">
          <i class="material-icons md-18">card_giftcard</i>
          <i class="material-icons md-18">gif</i>
 </div>
  </div>
    </div>
</template>

<script>
 import {fireDb} from '~/plugins/firebase.js'
import * as firebase from 'firebase'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            message: ''
        }
    },
    computed: {
       ...mapGetters({
        channelName: 'channelName',
        messages: 'messages'
      })
    },
    methods: {
    async addChannel() {
        const ref = fireDb.collection("test").doc(this.channelName).collection('messages')

        const document = {
            message: this.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        try {
          await ref.add(document)
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        this.message = ''
      }
    },
  
 
}
</script>

<style >
.chat {
    display: flex;
    flex-direction: column;
    flex: 0.75;
    background-color: #363a3f;
}

.chat__input {
    color: lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-radius:5px;
    margin: 20px;
    border-top: 1px solid gray;
    background-color: #474b53;
}

.chat__input > form > input {
    padding: 15px;
    background: transparent;
    width: 100%;
    border: none;
    outline-width: 0;
    color:white;
    font-size: large;
}

.chat__messages {
    flex: 1;
    overflow: scroll;
}

.chat__messages::-webkit-scrollbar {
    display: none;
}

.chat__messages {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.chat__input > form {
    flex: 1;
}

.chat__inputButton {
    display: none;
}

.chat__inputIcons > i {
    padding: 5px;
}
</style>

    