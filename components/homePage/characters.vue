<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar title="POPULAR CHARACTERS" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="characters in popular.CharacterItems.items" :key="characters" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="250" @click="toggle">
              <img class="align-end text-white" height="400" :src="`${characters.content.image.filename}`"
                cover />

              <v-card-subtitle class="pt-4">
                Affiliates: {{ characters.content.affiliates }}
              </v-card-subtitle>

              <v-card-title>{{ characters.content.name }}</v-card-title>

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
        <v-toolbar title="SPELL CREATURES" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="monsters in monster.MonsterItems.items" :key="monsters" v-slot="{ isSelected, toggle }">
              <a :href="`/monsters/${monsters.id}`"><v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200"
                @click="toggle">
                <img class="align-end text-white" height="250" :src="`${monsters.content.image.filename}`" cover />

                <v-card-title class="pt-4">{{ monsters.content.name }}</v-card-title>
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

      <v-col cols="12">
        <v-toolbar title="CHARACTERS FROM MYTHOLOGY" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="mythology in myth.MythologyItems.items" :key="mythology"
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
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<script setup>
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

const querypopularmonster = gql `
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

const querypopularmyth = gql `
  query {
  MythologyItems (with_tag: "Popularmythology"){
    items {
      id
      content {
        name
        alias
        affiliates {
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
    data: myth
  } = await useAsyncQuery(querypopularmyth)

  const {
    data: monster
  } = await useAsyncQuery(querypopularmonster)

  const {
    data: popular
  } = await useAsyncQuery(querypopular)
/*const { getItems } = useDirectusItems()

const characters = await getItems({ collection: "characters", params: { limit: 6 }});
const monsters = await getItems({ collection: "monsters", params: { limit: 6 }});
const popularcharacters = await getItems({ collection: "characters", params: { limit: 6, filter: {name: "popular"}} });*/
</script>