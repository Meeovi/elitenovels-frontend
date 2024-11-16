<template>
  <div class="categoryPage">
    <mythologybar />
    <v-row style="background-color: lightgreen;">
      <v-col cols="12">
        <h4>Popular Mythology</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="mythology in mythology" :key="mythology"
              v-slot="{ isSelected, toggle }">
              <characters :character="mythology" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-toolbar title="Royal Circa" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="royalcirca in royalcirca" :key="royalcirca" v-slot="{ isSelected, toggle, selectedClass }">
              <characters :character="royalcirca" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="BROWSE ELITEVERSE MYTHOLOGY" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="mythology in mythology" :key="mythology">
        <characters :character="mythology" />
      </v-col>
      <relatedstories />
    </v-row>
    <latestproducts />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import mythologybar from '~/components/Menus/mythologybar.vue'
  import characters from '~/components/related/character.vue'
  const model = ref(null);

  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: mythology
    } = await useAsyncData('mythology', () => {
        return $directus.request($readItems('characters', {
            filter: {
                type: {
                    _eq: "Mythology"
                }
            }
        }))
    })

    const {
        data: royalcirca
    } = await useAsyncData('royalcirca', () => {
        return $directus.request($readItems('characters', {
            filter: {
                affiliates: {
                    _eq: "Royal Circa"
                }
            }
        }))
    })

  useHead({
    title: 'Mythology',
  })
</script>