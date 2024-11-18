<template>
  <div class="categoryPage">
    <monsterbar />
    <v-row style="background-color: sienna;">
      <v-col cols="12">
        <h4 style="color: white;">Popular Monsters</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="monsters in monsters" :key="monsters"
              v-slot="{ isSelected, toggle }">
              <characters :character="monsters" />
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
            <v-slide-group-item v-for="aurelian in aurelian" :key="aurelian" v-slot="{ isSelected, toggle, selectedClass }">
              <characters :character="aurelian" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="BROWSE MONSTERS" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="monsters in monsters" :key="monsters">
        <characters :character="monsters" />
      </v-col>
      <relatedstories />
    </v-row>
    <latestproducts />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import monsterbar from '~/components/Menus/monsterbar.vue'
  import characters from '~/components/Related/character.vue'
  const model = ref(null);

  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: monsters
    } = await useAsyncData('monsters', () => {
        return $directus.request($readItems('characters', {
            filter: {
                tags: {
                  tags_id: {
                    name: {
                      _eq: "Monsters"
                    }
                  }
                }
            }
        }))
    })

    const {
        data: aurelian
    } = await useAsyncData('aurelian', () => {
        return $directus.request($readItems('characters', {
          filter: {
                tags: {
                  tags_id: {
                    name: {
                      _eq: "Aurelian Characters"
                    }
                  }
                }
            }
        }))
    })

  useHead({
    title: 'Monsters',
  })
</script>