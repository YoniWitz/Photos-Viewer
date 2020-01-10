<template>
  <v-toolbar fixed class="indigo" dark>
    <v-btn text dark router :to="{ path: 'photos' }">Photos Viewer</v-btn>

    <v-spacer></v-spacer>
    <v-btn v-if="!user" text dark router :to="{ path: 'login' }">Login</v-btn>
    <v-btn v-if="!user" btn text dark router :to="{ path: 'signup' }">Sign Up</v-btn>
    <v-btn disabled v-if="user" replace text dark>{{ user.email }}</v-btn>
    <v-btn v-if="user" replace text dark v-on:click.native="logout">Logout</v-btn>

    <v-snackbar v-model="logoutSnackbar" color="green">
      {{ logoutSnackbarText }}
      <v-btn color="pink" text @click="logoutSnackbar = false">Close</v-btn>
    </v-snackbar>
  </v-toolbar>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
      user: null,
      logoutSnackbar: false,
      logoutSnackbarText: "Logout Successful"
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.logoutSnackbar = true;
          this.$router.push({ name: "login" });
        });
    }
  },
  created() {
    //fires every time there's a change
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>
<style scoped>
.mr-4 {
  cursor: pointer;
}
</style>