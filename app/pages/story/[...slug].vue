<template>
  <div>
    <div v-if="story">
      <div class="container my-5 py-5">
        <!-- Section: Design Block -->
        <section class="mb-10">
          <div v-if="story?.image?.filename_disk">
            <img class="img-fluid shadow-1-strong rounded-5 mb-4" height="400" :alt="story?.name"
              :src="`${$directus.url}/assets/${story?.image?.filename_disk}`" cover />
          </div>

          <div v-else><img src="assets/images/coming_soon.png" :alt="story?.name"></div>

          <div v-else>
            <img class="img-fluid shadow-1-strong rounded-5 mb-4" height="300" src="~/assets/images/coming_soon.png"
              cover />
          </div>

          <div class="row align-items-center mb-4">
            <div class="col-lg-7">
              <span> Published <u>{{ new Date(story?.date_created).toLocaleDateString() }}</u></span>
            </div>
          </div>

          <h1 class="fw-bold mb-4">
            {{ story?.name }}
          </h1>

          <p>
            {{ story?.description }}
          </p>
        </section>
      </div>

      <div class="characterLowerPage">
        <v-row>
          <v-toolbar title="Characters in this Story" density="comfortable" color="transparent">
          </v-toolbar>
          <v-col cols="3" v-for="characters in story?.characters" :key="characters">
            <characters :character="characters?.characters_id" />
          </v-col>
        </v-row>
      </div>
    </div>

    <div v-else>
      <p class="storyNotFound">Story not found</p>
    </div>

    <relatedstories />
    <v-divider></v-divider>
    <comments />
  </div>
</template>

<script setup>
  import comments from '~/components/partials/comments.vue'
  import characters from '~/components/related/character.vue'
  import relatedstories from '~/components/related/relatedstories.vue'
  import { readItem } from '@directus/sdk';

  const route = useRoute()
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: story
  } = await useAsyncData('story', () => {
    return $directus.request(readItem('stories' , {
      filter: { slug: { _eq: `${route.params.slug}` } },
      fields: [
        '*',
        'image.*',
        'characters.characters_id.*',
        'characters.characters_id.character_options.characters_id.*',
        'characters.characters_id.stories.stories_id.*',
        'characters.characters_id.videos.videos_id.*'
      ]
    }))
  })

  useHead({
    title: computed(() => story?.value?.name || 'Story Page')
  })
</script>