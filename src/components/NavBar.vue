<template>
  <nav id="main-nav">
    <router-link to="/">Home</router-link>|
    <router-link :to="{name : 'about'}">About</router-link>|
    <!-- <router-link :to="{name : 'poll'}">Poll</router-link>  -->
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
ul{
  list-style-type: none;
  padding:0
}
#nav {
  padding: 30px;
}
a.router-link-exact-active{
  color:purple;
}
a{
  color: #42b983;
}
li{
  display:inline-block;
  margin:10px;
}

</style>
