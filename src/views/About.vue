<template>
  <v-app>
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "about",
  components: {
    HelloWorld
  }
};
</script>
