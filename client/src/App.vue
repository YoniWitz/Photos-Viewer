<template>
  <v-app>
    <v-content>
      <Navbar />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

