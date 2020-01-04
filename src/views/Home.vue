<template>
  <v-container fluid>
     <v-data-iterator
      :items="photos"
      :photos-per-page.sync="photosPerPage"
      :page="page"
     
      hide-default-footer
    >
    <template v-slot:default="props">
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="(photo, index) in props.photos"
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

    <template>
      <v-row class="mt-2" align="center" justify="center">
        <span class="grey--text">Photos per page</span>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn dark text color="primary" class="ml-2" v-on="on">
              {{ photosPerPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(number, index) in photosPerPageArray"
              :key="index"
              @click="updatephotosPerPage(number)"
            >
              <v-list-item-title>{{ number }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <span class="mr-4 grey--text">Page {{ page }} of {{ numberOfPages }}</span>
        <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </template>
      </v-data-iterator>
  </v-container>
</template>

<script>
// @ is an alias to /src
import photosArray from "@/assets/photos.js";
export default {
  name: "home",
  components: {},
  data() {
    return {
      page: 1,
      photosPerPage: 4,
      photosPerPageArray: [4, 8, 12],
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
  },
  methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updatephotosPerPage (number) {
        this.photosPerPage = number
      },
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.photos.length / this.photosPerPage)
      }
    }
};
</script>
