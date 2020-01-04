<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(photo, index) in photos"
              v-bind:key="index"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card flat tile class="d-flex">
                <v-img :src="photo.url" aspect-ratio="1" class="grey lighten-2" :id="photo.id">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import photosArray from "@/assets/photos.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      photos: []
    };
  },
  beforeMount() {
    this.photos = photosArray.map(photoUrl => {
      let splitArray = photoUrl.split("/");
      let photo = {
        url: photoUrl,
        height: splitArray.slice(-1)[0],
        width: splitArray.slice(-2)[0],
        id: splitArray.slice(-3)[0]
      };
      return photo;
    });
  }
};
</script>
