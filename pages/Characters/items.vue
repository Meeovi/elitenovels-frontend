<template>
  <div class="categoryPage">
    <v-toolbar title="Items" style="background-color: orange;"></v-toolbar>
    <v-row style="background-color: orange;">
      <v-col cols="12">
        <h4 style="color: white;">Popular Items</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="items in item" :key="items"
              v-slot="{ isSelected, toggle }">
              <items :item="items" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="items in item" :key="items" v-slot="{ isSelected, toggle, selectedClass }">
              <items :item="items" />
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
  import items from '~/components/Related/item.vue'
  const model = ref(null);

  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: item
    } = await useAsyncData('item', () => {
        return $directus.request($readItems('options', {
            fields: ['*', { '*': ['*'] }],
            filter: {
              type: {
                _eq: 'item'
              }
            }
        }))
    })

  useHead({
    title: 'Items',
  })
</script>