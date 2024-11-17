<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar dark prominent>
          <v-toolbar-title>{{ character?.name }}</v-toolbar-title>

          <v-img>
            <div v-if="character?.image?.filename_disk">
              <img class="align-end text-white" height="300"
                :src="`${$directus.url}/assets/${character?.image?.filename_disk} || '../../../assets/images/coming_soon.png'`"
                cover />
            </div>

            <div v-else>
              <img class="align-end text-white" height="300" src="~/assets/images/coming_soon.png" cover />
            </div>
          </v-img>
        </v-toolbar>
      </v-col>

      <v-col cols="8">
        <v-card class="mx-auto" :text="character?.description" elevation="0"></v-card>
      </v-col>

      <v-col cols="4">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" width="400">
              <div v-if="character?.image?.filename_disk">
                <img class="align-end text-white" height="300"
                  :src="`${$directus.url}/assets/${character?.image?.filename_disk} || '../../../assets/images/coming_soon.png'`"
                  cover />
              </div>

              <div v-else>
                <img class="align-end text-white" height="300" src="~/assets/images/coming_soon.png" cover />
              </div>

              <v-card-subtitle class="pt-4">
                <div>Categories:
                  <div v-for="category in character?.categories?.categories_id" :key="category">
                    {{ category?.name }}
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

      <div class="characterLowerPage">
        <v-col cols="12">
          <h3>Items</h3>
          <div v-for="items in character?.items" :key="items">
            <item :item="items?.items_id" />
          </div>
        </v-col>

        <v-col cols="12">
          <h3>Places</h3>
          <div v-for="places in character?.places" :key="places">
            <place :place="places?.places_id" />
          </div>
        </v-col>

        <v-col cols="12">
          <h3>Stories</h3>
          <div v-for="stories in character?.stories" :key="stories?.stories_id?.id">
            <story :story="stories?.stories_id" />
          </div>
        </v-col>

        <v-col cols="12">
          <h3>Videos</h3>
          <div v-for="videos in character?.videos?.videos_id" :key="videos">
            <video :video="videos" />
          </div>
        </v-col>
      </div>

      <v-col cols="12">
        <comments />
      </v-col>
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
  import story from '~/components/related/story.vue'
  import video from '~/components/related/video.vue'

  const route = useRoute()
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: character
  } = await useAsyncData('character', () => {
    return $directus.request($readItem('characters', route.params.slug, {
      fields: ['*', '*.*.*'],
    }))
  })

  useHead({
    title: computed(() => character?.value?.name || 'Character Page')
  })
</script>