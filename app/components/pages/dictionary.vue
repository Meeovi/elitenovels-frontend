<template>
  <div class="categoryPage">
    <v-toolbar title="Dictionary" style="background-color: lightcoral"></v-toolbar>

    <v-row>
      <v-col cols="12">
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="dictionary in dictionaryData" :key="dictionary" v-slot="{ isSelected, toggle, selectedClass }">
              <dictionary :dictionary="dictionary" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  //import characterbar from '~/components/menus/characterbar.vue'
  import dictionary from '~/components/related/dictionary.vue'
  const model = ref(null);

  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: dictionaryData
    } = await useAsyncData('dictionary', () => {
        return $directus.request($readItems('dictionary', {
            fields: ['*', { '*': ['*'] }],
            filter: {
              type: {
                _eq: 'Dictionary'
              }
            }
        }))
    })

  useHead({
    title: 'Dictionary',
  })
</script>