<template>
  <div class="categoryPage">
    <characterbar />
    <v-row style="background-color: powderblue;">
      <v-col cols="12">
        <h4>Popular Characters</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="characters in characters" :key="characters"
              v-slot="{ isSelected, toggle }">
              <characters :character="characters" />
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
            <v-slide-group-item v-for="teams in team" :key="teams" v-slot="{ isSelected, toggle, selectedClass }">
              <characters :character="teams" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="BROWSE CHARACTERS" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="characters in character" :key="characters">
        <characters :character="characters" />
      </v-col>
      <relatedstories />
    </v-row>
    <latestproducts />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import characterbar from '~/components/Menus/characterbar.vue'
  import characters from '~/components/related/character.vue'
  const model = ref(null);

  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: character
    } = await useAsyncData('character', () => {
        return $directus.request($readItems('characters'))
    })

    const {
        data: team
    } = await useAsyncData('team', () => {
        return $directus.request($readItems('characters', {
            filter: {
                type: {
                    _eq: "Team"
                }
            }
        }))
    })

  useHead({
    title: 'Characters',
  })
</script>