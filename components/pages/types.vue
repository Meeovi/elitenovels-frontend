<template>
  <div class="categoryPage">
    <v-toolbar title="Types" style="background-color: blue;"></v-toolbar>
    <v-row style="background-color: blue;">
      <v-col cols="12">
        <h4 style="color: white;">Popular Types</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="types in monsterTypes" :key="types"
              v-slot="{ isSelected, toggle }">
              <types :item="types" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="types in monsterTypes" :key="types" v-slot="{ isSelected, toggle, selectedClass }">
              <types :item="types" />
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
  import types from '~/components/Related/facet.vue'
  const model = ref(null);

  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: monsterTypes
    } = await useAsyncData('monsterTypes', () => {
        return $directus.request($readItems('options', {
            fields: ['*', { '*': ['*'] }],
            filter: {
              type: {
                _eq: 'Type'
              }
            }
        }))
    })

  useHead({
    title: 'Types',
  })
</script>