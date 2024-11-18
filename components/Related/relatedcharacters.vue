<template>
    <div>
      <v-col cols="12">
        <v-toolbar title="READ STORIES ABOUT YOUR FAVORITE CHARACTERS" density="comfortable" color="transparent">
        </v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="characters in characters" :key="characters"
              v-slot="{ isSelected, toggle, selectedClass }">
              <character :character="characters" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  import character from '~/components/Related/character.vue'

  const model = ref(null)
  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: characters
    } = await useAsyncData('characters', () => {
        return $directus.request($readItems('characters'))
    })
  useHead({
    title: 'Characters',
  })
</script>