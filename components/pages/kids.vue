<template>
  <div class="categoryPage">
    <v-row style="background-color: khaki;">
      <v-col cols="12">
        <h4 style="color: black;">Popular Kids Characters</h4>
        <v-sheet class="mx-auto categorySheet">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="char in kidsCharacter" :key="char.id"
              v-slot="{ isSelected, toggle }">
              <characterComponent :character="char?.id" />
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="char in kidsCharacter" :key="char.id" v-slot="{ isSelected, toggle, selectedClass }">
              <characterComponent :character="char?.id" />
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
  const model = ref(null);

  const {
        $directus,
        $readItems
    } = useNuxtApp()

  const {
    data: kidsCharacter
  } = await useAsyncData('kidsCharacter', () => {
    return $directus.request($readItems('characters', {
      fields: ['*',
        'abilities.abilities_id.*',
        'tags.tags_id.*',
        'options.options_id.*',
        'videos.videos_id.*',
        'universe.universe_id.*',
        'stories.stories_id.*',
        'image.*',
      ],
      filter: {
        universe: {
          univers_id: {
            name: {
              _eq: 'Kids'
            }
          }
        }
      }
    }))
  })

  useHead({
    title: 'Elite Kids',
  })
</script>