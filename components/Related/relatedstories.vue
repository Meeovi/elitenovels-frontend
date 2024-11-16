<template>
    <div>
      <v-col cols="12">
        <v-toolbar title="READ STORIES ABOUT YOUR FAVORITE CHARACTERS" density="comfortable" color="transparent">
        </v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="stories in stories" :key="stories"
              v-slot="{ isSelected, toggle, selectedClass }">
              <story :story="stories" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'

  const model = ref(null)
  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: stories
    } = await useAsyncData('stories', () => {
        return $directus.request($readItems('stories'))
    })
  useHead({
    title: 'Characters',
  })
</script>