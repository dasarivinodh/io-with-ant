<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/Menu1">Menu1</router-link>
    <router-link to="/Menu2">Menu2</router-link>
    <router-link to="/Menu3">Menu3</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  height:50px;
}
</style>
