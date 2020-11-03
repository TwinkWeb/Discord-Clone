<template>
    <div @click="setName(channelName)"  class="sidebarChannel">
        <h4><span class="sidebarChannel__hash">#</span>{{ channelName }}</h4>
    </div>
</template>

<script>
export default {
    props: {
        channelName: {
            type: String,
            default: () => ''
        }
    },
    methods: {
    setName(name) {
    this.$store.commit('setChannelName', name)
    this.$store.commit('GET_MESSAGES', name)
   },  
    }
}
</script>

<style scoped>
.sidebarChannel:hover > h4 {
    color: white;
    background-color: #40464b;
}

.sidebarChannel > h4 {
    display: flex;
    padding-left: 15px;
    align-items: center;    
    background-color: #2f3135;
    color: gray;
    cursor: pointer;
}

.sidebarChannel__hash {
    font-size: 30px;
    padding: 8px;
}


</style>