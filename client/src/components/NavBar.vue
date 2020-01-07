<template>
  <v-container>
    <v-toolbar fixed class="indigo" dark>
      <v-toolbar-title class="mr-4" dark v-on:click="navigateTo('/')">Photo Viewer</v-toolbar-title>
     

      <v-toolbar-items>
        <v-btn text dark router :to="{ path: 'photos' }">Photos</v-btn>
        <v-btn text dark router :to="{ path: 'about-vuetify' }">Vuetify</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-btn text dark router :to="{ path: 'login' }">Login</v-btn>
      <v-btn text dark router :to="{ path: 'signup' }">Sign Up</v-btn>
       <v-toolbar-title class="mr-4" dark v-on:click="logout">Logout</v-toolbar-title>
      <v-toolbar-items>
        <!-- <v-btn flat dark router to="d">Table</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    navigateTo(route) {
      if(this.$router.currentRoute.path !== route)
      this.$router.push(route);
    },
    logout(){
      console.log("you have successfully logged out")
    }
  }
};
</script>

<style scoped>
.mr-4 {
  cursor: pointer;
}
.mr-4 hover {
  color: black;
}
</style>
