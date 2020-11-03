<template>
<div class="login">
    <div class="login__logo">
    <img  src="https://steamuserimages-a.akamaihd.net/ugc/943935949948261216/6BB60699D9C0DB8F559BAE20FB0BA3A848844D5D/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" alt="">
    </div>

    <button @click.prevent="signIn" class="login__btn">Sign in</button>
</div>
    
</template>

<script>


export default {
methods: {
     async signIn() {
         await this.$store.dispatch('login')
          this.$router.push('/')
      },
},
}
</script>

<style scoped>
.login {
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
}

.login__logo {
    width: 80%;
    display: flex;
    justify-content: center;
}

.login__logo > img {
    width: 50%;
   
}

.login__btn {
    width: 300px;
    background-color: #738adb;
    color: #eff2f5;
    font-weight: 500;
    outline-width: 0;
    text-transform: uppercase;
    padding: 5px;
    transition: .5s;
    cursor: pointer;
}

.login__btn:hover {
    background-color: black;
}

</style>