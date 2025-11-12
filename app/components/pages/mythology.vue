<template>
  <div class="categoryPage">
    <v-row style="background-color: lightgreen;">
      <v-col cols="12">
        <v-toolbar title="Popular Myths" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="mythology in mythology" :key="mythology" v-slot="{ toggle }">
              <characters :character="mythology" class="characterCard" @click="toggle"
                :class="['ma-4', selectedClass]" />
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
            <v-slide-group-item v-for="royalcirca in royalcirca" :key="royalcirca"
              v-slot="{ toggle, selectedClass }">
              <characters :character="royalcirca" class="characterCard" @click="toggle"
                :class="['ma-4', selectedClass]" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="BROWSE ELITEVERSE MYTHOLOGY" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="mythology in mythology" :key="mythology">
        <characters :character="mythology" class="characterCard" @click="toggle" :class="['ma-4', selectedClass]" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
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
      fields: ['*', {
        '*': ['*']
      }],
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
        tags: {
          tags_id: {
            name: {
              _eq: "Royal Circa"
            }
          }
        }
      }
    }))
  })

  const {
    data: characterPage
  } = await useAsyncData('characterPage', () => {
    return $directus.request($readItem('pages', '3', {
      fields: ['*', 'image.*'],
    }))
  })

  useHead({
    title: 'Mythology',
  })
</script>