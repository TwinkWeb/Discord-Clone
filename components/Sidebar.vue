<template>
<div class="sidebar">
  <div class="sidebar__top">
    <h2>My own discord</h2>
    <i class="material-icons md-18">expand_more</i>
  </div>

  <div class="sidebar__channels">
    <div class="sidebar__channelsHeader">
      <div class="sidebar__header">
         <i class="material-icons md-18">expand_more</i>
         <h4>Text channels</h4>
       </div>
        <i class="material-icons md-18 sidebar__addChannel">add</i>
    </div>
     <div class="sidebar__channelList">
  <SidebarChannel />
  <SidebarChannel />
  <SidebarChannel />
  <SidebarChannel />
  </div>
  </div>

  <div class="sidebar__voice">
        <i class="material-icons md-18 sidebar__voiceIcon">signal_cellular_4_bar</i>
        <div class="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div class="sidebar__voiceIcons">
         <i class="material-icons md-18">info</i>
         <i class="material-icons md-18">call</i>
        </div>
  </div>

  <div class="sidebar__profile">
  <i @click.prevent="logOut" class="material-icons md-18">account_circle</i>
  <div class="sidebar__profileInfo">
    <h3>{{ userProfile.name }}</h3>
    <p>#{{ userProfile.id.substring(0, 5) }}</p>
    <p></p>
  </div>

 

  <div class="sidebar__profileIcons">
  <i class="material-icons md-18">mic</i>
  <i class="material-icons md-18">headset</i>
  <i class="material-icons md-18">settings</i>
  </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
computed: {
  ...mapGetters({
        userProfile: 'userProfile'
      })
},
 methods: {
  logOut() {
  this.$store.dispatch('logout')
  this.$router.push('/Login')
},
 }
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  flex: 0.25;
  height: 100vh;
  background-color: #2f3135;
}

.sidebar__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2f3135;
  color: white;
  border-bottom: 3px solid #26282c;
}
.sidebar__header {
  display: flex;
}

.sidebar__channels {
  flex: 1;
}

.sidebar__addChannel {
  cursor: pointer;
}

.sidebar__addChannel:hover {
 color: white
}

.sidebar__channelsHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #2f3135;
  color: grey;
}


.sidebar__voice,
.sidebar__profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f3135;
  color: grey;
  padding: 10px;
  border-top: 1px solid grey;
}

.sidebar__voiceInfo {
  flex: 1;
  padding: 10px;
}

.sidebar__voiceIcon {
  color: #4fb185;
}

.sidebar__voiceInfo> h3 {
  color: #4fb185;
}

.sidebar__voiceIcons > * {
  padding: 10px;
}

.sidebar__profileInfo {
  flex: 1;
  padding: 10px;
}


</style>
