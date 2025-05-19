<template>
  <div class="categoryPage">
    <v-toolbar title="Places" style="background-color: khaki;"></v-toolbar>
    <v-row style="background-color: khaki;">
      <v-col cols="12">
        <h4 style="color: black;">Popular Places</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="places in characterPlaces" :key="places"
              v-slot="{ isSelected, toggle }">
              <places :item="places" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="places in characterPlaces" :key="places" v-slot="{ isSelected, toggle, selectedClass }">
              <places :item="places" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <relatedstories />
    </v-row>
    <latestproducts />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import places from '~/components/Related/facet.vue'
  const model = ref(null);

  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: characterPlaces
    } = await useAsyncData('characterPlaces', () => {
        return $directus.request($readItems('options', {
            fields: ['*', { '*': ['*'] }],
            filter: {
              type: {
                _eq: 'Places'
              }
            }
        }))
    })

  useHead({
    title: 'Places',
  })
</script>