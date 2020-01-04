<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-toolbar-title>Photo Viewer</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn dark to="/">Home</v-btn>
        <v-btn    dark :to="{ path: 'about' }">vuetify</v-btn>         
        <!-- <v-btn to="d">Table</v-btn> -->
      </v-toolbar-items>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>

</style>
