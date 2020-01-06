<template>
  <v-app>
    <v-content>
      <v-container>
        <v-toolbar fixed class="indigo" dark>
          <v-toolbar-title class="mr-4" dark v-on:click="navigateTo('/photos')">Photo Viewer</v-toolbar-title>

          <v-toolbar-items>
            <v-btn text dark router :to="{ path: 'about-vuetify' }">Vuetify</v-btn>
          </v-toolbar-items>

          <v-spacer></v-spacer>
          <v-btn v-if="!authenticated" text dark router :to="{ path: 'login' }">Login</v-btn>
          <v-btn v-if="!authenticated" text dark router :to="{ path: 'signup' }">Sign Up</v-btn>
          <v-btn v-if="authenticated" to="/login" replace text dark v-on:click="logout">Logout</v-btn>
        </v-toolbar>
      </v-container>
      <!-- <NavBar /> -->
      <router-view @authenticated="setAuthenticated" />
    </v-content>
  </v-app>
</template>

<script>
// import NavBar from "@/components/NavBar.vue";

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
      if (this.authenticated) this.$router.push(route);
    },
    logout() {
      this.authenticated = false;
      window.localStorage.setItem('authenticated', JSON.stringify(this.authenticated));
    }
  },
  components: {
    // NavBar
  },
  created() {
    if (typeof Storage !== "undefined") {
      this.authenticated = JSON.parse(window.localStorage.getItem("authenticated")) || false;
    }
  }
  // mounted() {
  //   if (!this.authenticated) {
  //     this.$router.replace({ name: "login" });
  //   }
  // }
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