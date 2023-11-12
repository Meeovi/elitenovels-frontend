<template>
  <div class="categoryPage">
    <characterbar />
    <v-row style="background-color: powderblue;">
      <v-col cols="12">
        <h4>Popular Characters</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="characters in popular.CharacterItems.items" :key="characters"
              v-slot="{ isSelected, toggle }">
              <a :href="`/characters/${characters.id}`">
                <v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200" @click="toggle">
                  <img class="align-end text-white" height="250" :src="`${characters.content.image.filename}`" cover />
                  <v-card-title class="pt-4">{{ characters.content.name }}</v-card-title>
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
        <v-toolbar title="CHARACTER TEAMS" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="teams in team.CharacterItems.items" :key="teams" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="300" @click="toggle">
                <img class="align-end text-white" height="400" :src="`${teams.content.image.filename}`" cover />

                <v-card-subtitle class="pt-4">
                  Affiliates: {{ teams.content.affiliates.name }}
                </v-card-subtitle>

                <v-card-title>{{ teams.content.name }}</v-card-title>

                <v-card-actions>
                  <v-btn color="blue" :href="`/teams/${teams.id}`">
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
      <v-col cols="3" v-for="characters in data.CharacterItems.items" :key="characters">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="350" :src="`${characters.content.image.filename}`" cover />

          <v-card-subtitle class="pt-4">
            {{ characters.content.category.name }}
          </v-card-subtitle>

          <v-card-title>{{ characters.content.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="`/characters/${characters.id}`">
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
  import characterbar from '../../components/Menus/characterbar.vue'
  import latestproducts from '../../components/Related/relatedproducts.vue'
  import relatedstories from '../../components/Related/relatedstories.vue'

  export default {
    components: {
      characterbar,
      latestproducts,
      relatedstories
    },
    data: () => ({
      model: null,
      url: 'http://meeovicms.com:8007'
    }),
  }
</script>

<script setup>
  const query = gql `
  query {
  CharacterItems(sort_by: "name") {
    items {
      id
      content {
        name
        alias
        affiliates {
          id
          name
        }
        description
        image {
          filename
        }
        category {
          name
        }
      }
    }
  }
}
`

const queryteam = gql `
  query {
  CharacterItems (with_tag: "Team"){
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

const querypopular = gql `
  query {
  CharacterItems (with_tag: "Popularcharacter"){
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
    data: team
  } = await useAsyncQuery(queryteam)

  const {
    data: popular
  } = await useAsyncQuery(querypopular)
  /*const { getItems } = useDirectusItems()

  const teams = await getItems({ collection: "teams", params: { limit: 6 }});
  const stories = await getItems({ collection: "stories", params: { limit: 6 }});
  const popularcharacters = await getItems({ collection: "characters", params: { limit: 6, filter: {name: "popular"}} });
  const characters = await getItems({ collection: "characters", params: { limit: 20 }}); */

  useHead({
    title: 'Characters',
  })
</script>