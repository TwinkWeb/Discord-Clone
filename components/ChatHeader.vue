<template>
    <div class="chatHeader">
        <div class="chatHeader__left">
            <h3>
                <span class="chatHeader__hash">
                    #
                </span>
                Test Channel name
            </h3>
        </div>

        <div class="chatHeader__right">
          <i class="material-icons md-18">notifications</i>
          <i class="material-icons md-18">location_on</i>
          <i style="width: 34px;" class="material-icons md-18">people_alt</i>

          <div class="chatHeader__search">
              <input placeholder="Search">
              <i class="material-icons md-18">search</i>
          </div>

             <i class="material-icons md-18">send</i>
             <i class="material-icons md-18">help</i>

        </div>
    </div>
</template>

<style>

.chatHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    padding: 10px;
}

.chatHeader__hash {
    color: gray;
    font-size: 30px;
    padding: 10px;
}

.chatHeader__left > h3 {
    display: flex;
    align-items: center;
    color: white;
}

.chatHeader__right {
    display: flex;
    align-items: center;
    flex: 0.5;
    justify-content: space-between;
}

.chatHeader__right > i {
    padding: 5px; 
    cursor: pointer;
}

.chatHeader__right > i:hover {
    color: white;
}

.chatHeader__search {
    display: flex;
    align-items: center;
    color: gray;
    background-color:#2f3135;
    border-radius: 3px;
    padding: 3px;   
}


.chatHeader__search >input {
    background-color: transparent;
    outline-width: 0;
    color: white;
    border: none;
}

</style>