<template>
  <div class="categoryPage">
    <v-toolbar title="Levels" style="background-color: blue;"></v-toolbar>
    <v-row style="background-color: blue;">
      <v-col cols="12">
        <h4 style="color: white;">Popular Levels</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="levels in level" :key="levels"
              v-slot="{ isSelected, toggle }">
              <levels :level="levels" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="levels in level" :key="levels" v-slot="{ isSelected, toggle, selectedClass }">
              <levels :level="levels" />
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
  import characterbar from '~/components/Menus/characterbar.vue'
  import levels from '~/components/Related/level.vue'
  const model = ref(null);

  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: level
    } = await useAsyncData('level', () => {
        return $directus.request($readItems('levels'))
    })

  useHead({
    title: 'Levels',
  })
</script>