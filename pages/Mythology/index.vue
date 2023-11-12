<template>
  <div class="categoryPage">
    <mythologybar />
    <v-row style="background-color: lightgreen;">
      <v-col cols="12">
        <h4>Popular Mythology</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="mythology in data.MythologyItems.items" :key="mythology"
              v-slot="{ isSelected, toggle }">
              <a :href="`/mythology/${mythology.id}`">
                <v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200" @click="toggle">
                  <img class="align-end text-white" height="250" :src="`${mythology.content.image.filename}`" cover />
                  <v-card-title class="pt-4">{{ mythology.content.name }}</v-card-title>
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                    </v-scale-transition>
                  </div>
                </v-card>
              </a>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-toolbar title="ROYAL CIRCA" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="royal in royalcirca.MythologyItems.items" :key="royal" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="300" @click="toggle">
                <img class="align-end text-white" height="400" :src="`${royal.content.image.filename}`" cover />

                <v-card-subtitle class="pt-4">
                  Affiliates: {{ royal.content.affiliates.name }}
                </v-card-subtitle>

                <v-card-title>{{ royal.content.name }}</v-card-title>

                <v-card-actions>
                  <v-btn color="blue" :href="`/mythology/${royal.id}`">
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
        <v-toolbar title="BROWSE CHARACTERS" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="mythology in data.MythologyItems.items" :key="mythology">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="350" :src="`${mythology.content.image.filename}`" cover />

          <v-card-subtitle class="pt-4">
            {{ mythology.content.category.name }}
          </v-card-subtitle>

          <v-card-title>{{ mythology.content.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="`/mythology/${mythology.id}`">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <relatedstories />
    </v-row>
    <latestproducts />
  </div>
</template>

<script>
  import mythologybar from '../../components/Menus/mythologybar.vue'
  import latestproducts from '../../components/Related/relatedproducts.vue'
  import relatedstories from '../../components/Related/relatedstories.vue'

  export default {
    components: {
      mythologybar,
      latestproducts,
      relatedstories
    },
    data: () => ({
      model: null,
    }),
  }
</script>

<script setup>
  const query = gql `
  query {
  MythologyItems (sort_by: "name"){
    items {
      id
      content {
        name
        alias
        affiliates {
          name
        }
        category {
          name
        }
        description
        image {
          filename
        }
      }
    }
  }
}
`

const queryroyal = gql `
  query {
  MythologyItems (with_tag: "RoyalCirca"){
    items {
      id
      content {
        name
        alias
        affiliates {
          name
        }
        category {
          name
        }
        description
        image {
          filename
        }
      }
    }
  }
}
`

const querypopular = gql `
  query {
  MythologyItems (with_tag: "Popularmythology"){
    items {
      id
      content {
        name
        age
        alias
        affiliates {
          name
        }
        abilities
        description
        image {
          filename
        }
      }
    }
  }
}
`

  const {
    data
  } = await useAsyncQuery(query)

  const {
    data: royalcirca
  } = await useAsyncQuery(queryroyal)

  const {
    data: popular
  } = await useAsyncQuery(querypopular)
  /*const { getItems } = useDirectusItems()

  const teams = await getItems({ collection: "teams", params: { limit: 6 }});
  const stories = await getItems({ collection: "stories", params: { limit: 6 }});
  const popularmythology = await getItems({ collection: "mythology", params: { limit: 6, filter: {name: "popular"}} });
  const mythology = await getItems({ collection: "mythology", params: { limit: 20 }}); */

  useHead({
    title: 'Mythology',
  })
</script>