<template>
  <div class="container">
<Sidebar />
<Chat/>
  </div>
</template>

<script>

export default {
  middleware: ['authFunc']
}
</script>

<style>
.container {
  display: flex;
  height: 100vh;
}
</style>
