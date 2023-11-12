<template>
  <div class="categoryPage">
    <monsterbar />
    <v-row style="background-color: sienna;">
      <v-col cols="12">
        <h4>Popular Monsters</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="monsters in popular.MonsterItems.items" :key="monsters" v-slot="{ isSelected, toggle }">
              <a :href="`/monsters/${monsters.id}`"><v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200"
                @click="toggle">
                <img class="align-end text-white" height="250" :src="`${monsters.content.image.filename}`" cover />

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
        <v-toolbar title="Aurelian Characters" density="comfortable" color="transparent"></v-toolbar>
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
        <v-toolbar title="BROWSE MONSTERS" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="monsters in data.MonsterItems.items" :key="monsters">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="350" :src="`${monsters.content.image.filename}`" cover />

          <v-card-subtitle class="pt-4">
            {{ monsters.content.affiliates.name }}
          </v-card-subtitle>

          <v-card-title>{{ monsters.content.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="`/monsters/${monsters.id}`">
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
const query = gql `
  query {
  MonsterItems{
    items {
      id
      content {
        name
        affiliates {
          name
        }
        abilities
        types {
          name
        }
        levels {
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

const queryaurelian = gql `
  query {
  CharacterItems (with_tag: "AurelianCharacters"){
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
  MonsterItems (with_tag: "Popularmonster"){
    items {
      id
      content {
        name
        affiliates {
          name
        }
        abilities
        types {
          name
        }
        levels {
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

  const {
    data
  } = await useAsyncQuery(query)

  const {
    data: team
  } = await useAsyncQuery(queryaurelian)

  const {
    data: popular
  } = await useAsyncQuery(querypopular)
/*const { getItems } = useDirectusItems()

const characters = await getItems({ collection: "characters", params: {filter: {categories: {categories_id: {id: {_eq: 11}}}}, limit: 25 }});
const stories = await getItems({ collection: "stories", params: { limit: 6 }});
const popularmonsters = await getItems({ collection: "monsters", params: { limit: 6, filter: {tags: {_eq: "popular"}}}});
const monsters = await getItems({ collection: "monsters", params: { limit: 6 }});*/

  useHead({
    title: 'Monsters',
  })
</script>