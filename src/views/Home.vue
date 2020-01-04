<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import photosArray from "@/assets/photos.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      photos: photosArray
    };
  }
};
</script>
