<template>
  <div class="categoryPage">
    <mythologybar />
    <v-row style="background-color: lightgreen;">
      <v-col cols="12">
        <h4>Popular Characters</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="mythology in popularmythology" :key="mythology" v-slot="{ isSelected, toggle }">
              <a :href="`/mythology/${mythology.id}`"><v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200"
                @click="toggle">
                <img class="align-end text-white" height="250" :src="`${url}/assets/${mythology.image}`" cover />

                <v-card-title class="pt-4">{{ mythology.name }}</v-card-title>
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
        <v-toolbar title="Primordial Ones" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="mythology in primordial" :key="mythology" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="300" @click="toggle">
              <img class="align-end text-white" height="400" :src="`${url}/assets/${mythology.image}`"
                cover />

              <v-card-subtitle class="pt-4">
                Published: {{ mythology.created_at }}
              </v-card-subtitle>

              <v-card-title>{{ mythology.name }}</v-card-title>

              <v-card-actions>
                <v-btn color="blue" :href="`/mythology/${mythology.id}`">
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
        <v-toolbar title="BROWSE THE GODS AND GODDESSES" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="12">
        <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="mythology in mythology" :key="mythology" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="300" @click="toggle">
              <img class="align-end text-white" height="400" :src="`${url}/assets/${mythology.image}`"
                cover />

              <v-card-subtitle class="pt-4">
                Published: {{ mythology.created_at }}
              </v-card-subtitle>

              <v-card-title>{{ mythology.name }}</v-card-title>

              <v-card-actions>
                <v-btn color="blue" :href="`/mythology/${mythology.id}`">
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
      url: 'http://meeovicms.com:8007'
    }),
  }
</script>

<script setup>
const { getItems } = useDirectusItems()

const primordial = await getItems({ collection: "mythology", params: { limit: 6}});
const stories = await getItems({ collection: "stories", params: { limit: 6 }});
const popularmythology = await getItems({ collection: "mythology", params: { limit: 6}});
const mysticalcreatures = await getItems({ collection: "mythology", params: { limit: 6}});
const mythology = await getItems({ collection: "mythology", params: { limit: 6 }});

  useHead({
    title: 'Mythology',
  })
</script>