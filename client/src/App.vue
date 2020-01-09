<template>
  <v-app>
    <v-content>
      <v-container>
        <v-toolbar fixed class="indigo" dark>
          <v-toolbar-title class="mr-4" dark v-on:click="navigateTo('/photos')">Photo Viewer</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-btn v-if="!authenticated" text dark router :to="{ path: 'login' }">Login</v-btn>
          <v-btn v-if="!authenticated" text dark router :to="{ path: 'signup' }">Sign Up</v-btn>
          <v-btn v-if="authenticated" to="/login" replace text dark v-on:click="logout">Logout</v-btn>
        </v-toolbar>
      </v-container>
      <router-view @authenticated="setAuthenticated" />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: null
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    navigateTo(route) {
      if (this.$router.currentRoute.path !== route) this.$router.push(route);
    },
    logout() {
      this.authenticated = false;
      window.localStorage.setItem(
        "authenticated",
        JSON.stringify(this.authenticated)
      );
    }
  },
  created() {
    if (typeof Storage !== "undefined") {
      this.authenticated =
        JSON.parse(window.localStorage.getItem("authenticated")) || false;
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>