<template>
  <div class="categoryPage">
    <monsterbar />
    <v-row style="background-color: sienna;">
      <v-col cols="12">
        <h4>Popular Characters</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="monsters in popularmonsters" :key="monsters" v-slot="{ isSelected, toggle }">
              <a :href="`/monsters/${monsters.id}`"><v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200"
                @click="toggle">
                <img class="align-end text-white" height="250" :src="`${url}/assets/${monsters.image}`" cover />

                <v-card-title class="pt-4">{{ monsters.name }}</v-card-title>
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                  </v-scale-transition>
                </div>
              </v-card></a>
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
          <v-slide-group-item v-for="stories in stories" :key="stories" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="300" @click="toggle">
              <img class="align-end text-white" height="400" :src="`${url}/assets/${stories.image}`"
                cover />

              <v-card-subtitle class="pt-4">
                Published: {{ stories.created_at }}
              </v-card-subtitle>

              <v-card-title>{{ stories.name }}</v-card-title>

              <v-card-actions>
                <v-btn color="blue" :href="`/stories/${stories.id}`">
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
        <v-toolbar title="AURELIAN CHARACTERS" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="characters in characters" :key="characters" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="300" @click="toggle">
              <img class="align-end text-white" height="400" :src="`${url}/assets/${characters.image}`"
                cover />

              <v-card-subtitle class="pt-4">
                Published: {{ characters.created_at }}
              </v-card-subtitle>

              <v-card-title>{{ characters.name }}</v-card-title>

              <v-card-actions>
                <v-btn color="blue" :href="`/characters/${characters.id}`">
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
        <v-toolbar title="BROWSE MONSTERS" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="monsters in monsters" :key="monsters">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="350" :src="`${url}/assets/${monsters.image}`" cover />

          <v-card-subtitle class="pt-4">
            {{ monsters.categories }}
          </v-card-subtitle>

          <v-card-title>{{ monsters.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="`/monsters/${monsters.id}`">
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
  import monsterbar from '../../components/Menus/monsterbar.vue'
  import latestproducts from '../../components/Related/relatedproducts.vue'

  export default {
    components: {
      monsterbar,
      latestproducts,
    },
    data: () => ({
      model: null,
      url: 'http://meeovicms.com:8007'
    }),
  }
</script>

<script setup>
const { getItems } = useDirectusItems()

const characters = await getItems({ collection: "characters", params: {filter: {categories: {categories_id: {id: {_eq: 11}}}}, limit: 25 }});
const stories = await getItems({ collection: "stories", params: { limit: 6 }});
const popularmonsters = await getItems({ collection: "monsters", params: { limit: 6, filter: {tags: {_eq: "popular"}}}});
const monsters = await getItems({ collection: "monsters", params: { limit: 6 }});

  useHead({
    title: 'Monsters',
  })
</script>