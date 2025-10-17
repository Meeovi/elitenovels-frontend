<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar title="POPULAR CHARACTERS" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="(characters, index) in popularCharacters" :key="index"
              v-slot="{ isSelected, toggle, selectedClass }">
              <v-col cols="3">
                <charactersCard :character="characters" />
              </v-col>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="SPELL CREATURES" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="monsters in monsters" :key="monsters" v-slot="{ isSelected, toggle }">
              <v-col cols="3">
                <charactersCard :character="monsters" />
              </v-col>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="CHARACTERS FROM MYTHOLOGY" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="mythology in mythology" :key="mythology" v-slot="{ isSelected, toggle }">
              <v-col cols="3">
                <charactersCard :character="mythology" />
              </v-col>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import charactersCard from '~/components/related/character.vue'
  const model = ref(null);

  const {
    $directus,
    $readItems
  } = useNuxtApp()

  const {
    data: popularCharacters
  } = await useAsyncData('popularCharacters', () => {
    return $directus.request($readItems('characters', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })

  const {
    data: monsters
  } = await useAsyncData('monsters', () => {
    return $directus.request($readItems('characters', {
      fields: ['*', {
        '*': ['*']
      }],
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
    data: mythology
  } = await useAsyncData('mythology', () => {
    return $directus.request($readItems('characters', {
      fields: ['*', {
        '*': ['*']
      }],
      filter: {
        tags: {
          tags_id: {
            name: {
              _eq: "Gods and Goddesses"
            }
          }
        }
      }
    }))
  })
</script>