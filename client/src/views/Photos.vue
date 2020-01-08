<template>
  <v-container fluid>
    <v-data-iterator
      :items="photos"
      :items-per-page.sync="urlParams.photosPerPage"
      :page="page"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="urlParams.height"
              flat
              solo-inverted
              hide-details
              clearable
              :items="heightKeys"
              label="Filter by Height"
            ></v-select>
            <v-spacer></v-spacer>
            <v-select
              v-model="urlParams.width"
              flat
              solo-inverted
              hide-details
              clearable
              :items="widthKeys"
              label="Filter by Width"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="urlParams.grayscale" mandatory>
              <v-btn large depressed color="red" :value="false">not grayscaled</v-btn>
              <v-btn large depressed color="green" :value="true">grayscale</v-btn>
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
                {{ urlParams.photosPerPage }}
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
import PhotosService from "@/services/PhotosService";
export default {
  data() {
    return {
      photosPerPageArray: [4, 8, 12],
      photos: [],
      page: 1,
      urlParams: {
        height: 0,
        width: 0,
        grayscale: false,
        photosPerPage: 4
      },

      heightKeys: [],
      widthKeys: []
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
      this.urlParams.photosPerPage = number;
    },
    async getPhotos() {
      await PhotosService.getPhotos({
        grayscale: this.urlParams.grayscale,
        height: this.urlParams.height || 0,
        width: this.urlParams.width || 0
      })
        .then(res => {
          this.photos = res.data;
        })
        .catch(err => {
          console.log(`error occurred: ${err}`);
        });
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.photos.length / this.urlParams.photosPerPage);
    }
  },
  watch: {
    urlParams: {
      handler: function() {
        this.getPhotos();
      },
      deep: true
    }
  },
  async mounted() {
    await PhotosService.getAllPhotos()
      .then(res => {
        this.photos = res.data;

        this.photos.forEach(photo => {
          //populate drop down height
          if (this.heightKeys.indexOf(photo.height) == -1)
            this.heightKeys.push(photo.height);
          //populate drop down width
          if (this.widthKeys.indexOf(photo.width) == -1)
            this.widthKeys.push(photo.width);
        });

        this.heightKeys.sort();
        this.widthKeys.sort();
      })
      .catch(err => {
        console.log(`error occurred: ${err}`);
      });
  }
};
</script>