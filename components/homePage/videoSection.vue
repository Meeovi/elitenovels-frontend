<template>
  <div>
    <v-col cols="12">
      <v-toolbar title="LATEST VIDEOS FROM ELITE NOVELS" density="comfortable" color="transparent"></v-toolbar>
      <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="videos in videos" :key="videos" v-slot="{ isSelected, toggle, selectedClass }">
            <video :video="videos" />
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
      data: videos
  } = await useAsyncData('videos', () => {
      return $directus.request($readItems('videos'))
  })
</script>