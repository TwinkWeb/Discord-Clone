<template>
<div class="message">
    <i class="material-icons md-18">perm_identity</i>
    <div class="message__info">
        <h4>
            Dmitri
            <span class="message__timestamp">This is timestamp</span>
        </h4>

        <p>This is message</p>
    </div>
    
</div>
    
</template>


<script>
export default {
    
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

</style>