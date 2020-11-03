<template>
<div class="message">
    <i class="material-icons md-18">perm_identity</i>
    <div class="message__info">
        <h4 class="message_message">
           {{ userProfile.name }}
            <span class="message__timestamp">
                {{  time }}
            </span>
        </h4>

        <p>{{ message }}</p>
    </div>
    
</div>
    
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    props: {
    message: {
        type: String,
        default: () => ''
    },
    timestamp: {
        type: Object,
        default: () => []
    }
    },
    computed: {
 ...mapGetters({
        userProfile: 'userProfile',
      }),
    time() {
        return new Date(this.timestamp?.toDate().toUTCString())
    }
},
}
</script>

<style scoped>

.message {
    display: flex;
    align-items: center;
    padding: 20px;
    color: white;
}

.message__info {
    margin-left: 20px;
}

.message__timestamp {
    color:gray;
    margin-left: 20px;
    font-size: x-small;
}

.message_message {
    display: flex;
    align-items: center;
}

</style>