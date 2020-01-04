<template>
  <v-container fluid>
    <v-data-iterator
      :items="filteredPhotos"
      :items-per-page.sync="photosPerPage"
      :page="page"
      :search="filterByHeight"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="filterByHeight"
              flat
              solo-inverted
              hide-details
              :items="heightKeys"
              label="Filter by Height"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="grayscale" mandatory>
              <v-btn large depressed color="red" :value="false" >not grayscaled</v-btn>
              <v-btn large depressed color="green" :value="true" >grayscale</v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col v-for="photo in props.items" :key="photo.id" cols="12" sm="6" md="4" lg="3">
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
      </template>

      <template v-slot:footer>
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
                @click="updatePhotosPerPage(number)"
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
import photosArray from "@/assets/photos.js";
export default {
  data() {
    return {
      photosPerPageArray: [4, 8, 12],
      photos: [],
      search: "",
      grayscale: false,
      page: 1,
      photosPerPage: 4,
      filterByHeight: "",
      heightKeys: []
    };
  },

  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updatePhotosPerPage(number) {
      this.photosPerPage = number;
    }
  },
  computed: {
    filteredPhotos() {
      return this.photos.filter(photo => {
        return !this.search || photo.height.includes(this.search);
      });
    },
    numberOfPages() {
      return Math.ceil(this.filteredPhotos.length / this.photosPerPage);
    }
  },
  watch: {
    grayscale: function() {
      this.grayscale? 
      this.photos.forEach(photo => photo.url += "?grayscale") :
      this.photos.forEach(photo => photo.url = photo.url.replace("?grayscale", ""));
    }
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

    photosArray.forEach(photoUrl => {
      let height = photoUrl.split("/").slice(-1)[0];
      if (this.heightKeys.indexOf(height) == -1) this.heightKeys.push(height);
    });
    this.heightKeys.sort();
  }
};
</script>