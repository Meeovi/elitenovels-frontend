<template>
    <div>
      <v-col cols="12">
        <v-toolbar title="OTHER ABILITIES" density="comfortable" color="transparent">
        </v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="abilities in abilities" :key="abilities"
              v-slot="{ isSelected, toggle, selectedClass }">
              <ability :ability="abilities" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  import ability from '~/components/Related/ability.vue'

  const model = ref(null)
  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: abilities
    } = await useAsyncData('abilities', () => {
        return $directus.request($readItems('abilities'))
    })
</script>