<template>
    <div class="sidebarChannel">
        <h4><span class="sidebarChannel__hash">#</span>Youtube</h4>
    </div>
</template>

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