<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar dark prominent :image="`${character?.image?.filename_disk}`">
          <v-toolbar-title>{{ character?.name }}</v-toolbar-title>
        </v-toolbar>
      </v-col>

      <v-col cols="8">
        <v-card class="mx-auto" :text="character?.description" variant="outlined"></v-card>
      </v-col>

      <v-col cols="4">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" width="400" variant="outlined">
              <img class="align-end text-white" height="300" :src="`${character?.image?.filename_disk}`" cover />

              <v-card-subtitle class="pt-4">
                <div>Categories: 
                  <div v-for="category in character?.categories?.categories_id" :key="category">
                    {{ category?.categories?.name }}
                  </div>
                </div>
              </v-card-subtitle>

              <v-card-text>
                <div>Name: {{ character?.name }}</div>
                <v-spacer></v-spacer>

                <div v-if="character?.type === 'Human'">Age: {{ character?.age }}</div>
                <v-spacer></v-spacer>
                
                <div>Alias: {{ character?.alias }}</div>
                <v-spacer></v-spacer>

                <div>Abilities: 
                  <div v-for="ability in character?.abilities?.abilities_id" :key="ability">
                    {{ ability?.abilities?.name }}
                  </div>
                </div>
                <v-spacer></v-spacer>

                <div>Affiliates: {{ character?.affiliates }}</div>

                <div>Type: {{ character?.type }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <h3>Items</h3>
        <div v-for="items in character?.items?.items_id" :key="items">
          <item :item="items" />
        </div>
      </v-col>

      <v-col cols="12">
        <h3>Places</h3>
        <div v-for="places in character?.places?.places_id" :key="places">
          <place :place="places" />
        </div>
      </v-col>

      <v-col cols="12"><comments /></v-col>
    </v-row>
  </div>
</template>

<script setup>
      import {
    useRoute,
    useRouter
  } from 'vue-router'
  import comments from '~/components/partials/comments.vue'
  import item from '~/components/related/item.vue'
  import place from '~/components/related/place.vue'

  const route = useRoute()
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: character
    } = await useAsyncData('character', () => {
        return $directus.request($readItem('characters', route.params.slug))
    })

    useHead({
        title: computed(() => character?.value?.name || 'Character Page')
    })
</script>