<template>
  <div class="categoryPage">
    <v-toolbar title="Abilities" style="background-color: blue;"></v-toolbar>
    <v-row style="background-color: blue;">
      <v-col cols="12">
        <h4 style="color: white;">Popular Abilities</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="abilities in ability" :key="abilities" v-slot="{ isSelected, toggle }">
              <abilities :ability="abilities" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-toolbar title="CHARACTER ABILITIES" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="abilities in characterAbility" :key="abilities"
              v-slot="{ isSelected, toggle, selectedClass }">
              <abilities :ability="abilities" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>

      <v-col cols="12">
        <v-toolbar title="MONSTER ABILITIES" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="abilities in monsterAbility" :key="abilities">
        <abilities :ability="abilities" />
      </v-col>
      <relatedstories />
    </v-row>
    <latestproducts />
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import characterbar from '~/components/menus/characterbar.vue'
  import abilities from '~/components/related/ability.vue'
  const model = ref(null);

  const {
    $directus,
    $readItems
  } = useNuxtApp()

  const {
    data: ability
  } = await useAsyncData('ability', () => {
    return $directus.request($readItems('abilities', {
            fields: ['*', { '*': ['*'] }]
        }))
  })

  const {
    data: characterAbility
  } = await useAsyncData('characterAbility', () => {
    return $directus.request($readItems('abilities', {
      fields: ['*', { '*': ['*'] }],
      filter: {
        type: {
          _eq: "Character Ability"
        }
      }
    }))
  })

  const {
    data: monsterAbility
  } = await useAsyncData('monsterAbility', () => {
    return $directus.request($readItems('abilities', {
      fields: ['*', { '*': ['*'] }],
      filter: {
        type: {
          _eq: "Monster Ability"
        }
      }
    }))
  })

  useHead({
    title: 'Abilities',
  })
</script>