<template>
  <v-container>
    <v-toolbar fixed class="indigo" dark>
      <v-toolbar-title class="mr-4" dark v-on:click="navigateTo('/')">Photo Viewer</v-toolbar-title>

      <v-toolbar-items>
         <v-btn text dark router :to="{ path: 'about' }">Images</v-btn>
      
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
       
        <!-- <v-btn flat dark router to="d">Table</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "NavBar",
  methods:{
    navigateTo(route){

    }
  }
};
</script>

<style scoped>
</style>
