<template>
  <div class="categoryPage">
    <mythologybar />
    <v-row style="background-color: lightgreen;">
      <v-col cols="12">
        <h4>Popular Characters</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
              <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200" width="100"
                @click="toggle">
                <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover>
                </v-img>
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-toolbar title="READ STORIES ABOUT YOUR FAVORITE CHARACTERS" density="comfortable" color="transparent">
        </v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card color="white" :class="['ma-4', selectedClass]" height="350" width="250" @click="toggle">
                <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover></v-img>

                <v-card-subtitle class="pt-4">
                  Published:
                </v-card-subtitle>

                <v-card-title>Top 10 Australian beaches</v-card-title>

                <v-card-actions>
                  <v-btn color="blue">
                    Read
                  </v-btn>
                </v-card-actions>
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="ROYAL CIRCA" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card color="white" :class="['ma-4', selectedClass]" height="370" width="250" @click="toggle">
                <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover></v-img>
                <v-card-title>Monster Name</v-card-title>

                <v-card-subtitle class="pt-4">
                  Type:
                </v-card-subtitle>

                <v-card-subtitle class="pt-4">
                  Level:
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn color="blue">
                    Check them out
                  </v-btn>
                </v-card-actions>
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                  </v-scale-transition>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="BROWSE MYTHICAL CHARACTERS" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="n in 4" :key="n">
        <v-card class="mx-auto" max-width="300">
          <v-img class="align-end text-white" height="350" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
          </v-img>

          <v-card-subtitle class="pt-4">
            Number 10
          </v-card-subtitle>

          <v-card-title>Top 10 Australian beaches</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <latestproducts />
  </div>
</template>

<script>
  import mythologybar from '../../components/Menus/mythologybar.vue'
  import latestproducts from '../../components/Related/relatedproducts.vue'

  export default {
    components: {
      mythologybar,
      latestproducts,
    },
    data: () => ({
      model: null,
    }),
  }
</script>

<script setup>
  useHead({
    title: 'Mythology',
  })
</script>