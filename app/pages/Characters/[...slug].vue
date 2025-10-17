<template>
  <div>
    <!-- CHARACTER HEADER -->
    <section data-bs-version="5.1" class="features7 stepm5 cid-uLEiKNmlwj" id="afeatures7-1r">
      <div class="container-fluid">
        <div class="row justify-content-start align-items-stretch">
          <div class="card col-12 col-lg-6">
            <div class="card-wrapper">
              <h4 class="card-title mbr-fonts-style align-center display-5">
                <strong>{{ character?.universe?.universe_id?.name || 'Unknown Universe' }}</strong>
              </h4>

              <div class="image-wrapper">
                <p class="mbr-fonts-style align-center display-5">
                  {{ character?.name }}
                </p>
              </div>

              <p class="mbr-text mbr-fonts-style align-center display-4" v-html="character?.description"></p>

              <div class="mbr-section-btn align-center">
                <p class="btn btn-white-outline display-7" v-if="character?.type">{{ character.type }}</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="image-wrapper">
              <img
                v-if="character?.image?.filename_disk"
                :src="`${$directus.url}assets/${character.image.filename_disk}`"
                :alt="character.name"
              />
              <img v-else src="/assets/images/coming_soon.png" :alt="character?.name || 'Character image placeholder'" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHARACTER DETAILS -->
    <section data-bs-version="5.1" class="features5 stepm5 cid-uLEh7eZjEW" id="afeatures5-1p">
      <div class="container-fluid">
        <div class="row justify-content-start align-items-stretch">
          <div class="mbr-section-head">
            <h4 class="mbr-section-title mbr-fonts-style mb-0 display-2">Character Details</h4>
          </div>

          <div class="card col-12">
            <div class="card-wrapper">
              <!-- BASIC INFO -->
              <div class="item">
                <p class="item-title mbr-fonts-style display-4">Name</p>
                <p class="mbr-text mbr-fonts-style display-4">{{ character?.name }}</p>
              </div>

              <div class="item">
                <p class="item-title mbr-fonts-style display-4">Age</p>
                <p class="mbr-text mbr-fonts-style display-4">{{ character?.age || 'Unknown' }}</p>
              </div>

              <div class="item">
                <p class="item-title mbr-fonts-style display-4">Alias</p>
                <p class="mbr-text mbr-fonts-style display-4">{{ character?.alias || 'None' }}</p>
              </div>

              <!-- AFFILIATES -->
              <div class="item" v-if="character?.affiliates?.length">
                <p class="item-title mbr-fonts-style display-4">Affiliates</p>
                <div v-for="(affiliate, i) in character.affiliates" :key="i">
                  <NuxtLink :to="`/characters/${affiliate?.characters_id?.slug}`">
                    {{ affiliate?.characters_id?.name }}
                  </NuxtLink>
                </div>
              </div>

              <!-- ABILITIES -->
              <div class="item" v-if="character?.abilities?.length">
                <p class="item-title mbr-fonts-style display-4">Abilities</p>
                <div v-for="(ability, i) in character.abilities" :key="i">
                  {{ ability?.abilities_id?.name }}
                </div>
              </div>

              <!-- TOPICS / TAGS -->
              <div class="item" v-if="character?.tags?.length">
                <p class="item-title mbr-fonts-style display-4">Topics</p>
                <div v-for="(topic, i) in character.tags" :key="i">
                  <NuxtLink :to="`/characters/category/${topic?.tags_id?.slug}`">
                    {{ topic?.tags_id?.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RELATED CONTENT -->
    <div class="characterLowerPage">
      <v-row>
        <!-- ITEMS -->
        <v-col cols="12" v-if="character?.character_options?.some(opt => opt.characters_id?.type === 'Items')">
          <h3>Items</h3>
          <v-row>
            <v-col cols="4" v-for="(opt, i) in character.character_options" :key="i" v-if="opt.characters_id?.type === 'Items'">
              <item :item="opt.characters_id" />
            </v-col>
          </v-row>
        </v-col>

        <!-- PLACES -->
        <v-col cols="12" v-if="character?.character_options?.some(opt => opt.characters_id?.type === 'Places')">
          <h3>Places</h3>
          <v-row>
            <v-col cols="4" v-for="(opt, i) in character.character_options" :key="i" v-if="opt.characters_id?.type === 'Places'">
              <item :place="opt.characters_id" />
            </v-col>
          </v-row>
        </v-col>

        <!-- STORIES -->
        <v-col cols="12" v-if="character?.stories?.length">
          <h3>Stories</h3>
          <v-row>
            <v-col cols="4" v-for="(storyItem, i) in character.stories" :key="i">
              <story :story="storyItem?.stories_id" />
            </v-col>
          </v-row>
        </v-col>

        <!-- VIDEOS -->
        <v-col cols="12" v-if="character?.videos?.length">
          <h3>Videos</h3>
          <v-row>
            <v-col cols="4" v-for="(video, i) in character.videos" :key="i">
              <videoComponent :video="video?.videos_id" />
            </v-col>
          </v-row>
        </v-col>

        <!-- RELATED CHARACTERS & COMMENTS -->
        <v-col cols="12">
          <relatedcharacters />
        </v-col>

        <v-col cols="12">
          <comments />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import comments from '~/components/partials/comments.vue'
import item from '~/components/related/facet.vue'
import relatedcharacters from '~/components/related/relatedcharacters.vue'
import videoComponent from '~/components/related/video.vue'
import story from '~/components/related/story.vue'

const route = useRoute()
const { $directus, $readItems } = useNuxtApp()

// Fetch character data by slug
const { data } = await useAsyncData('character', () => {
  return $directus.request(
    $readItems('characters', {
      filter: { slug: { _eq: `${route.params.slug}` } },
      fields: [
        '*',
        'tags.tags_id.*',
        'character_options.characters_id.*',
        'videos.videos_id.*',
        'universe.universe_id.*',
        'stories.stories_id.*',
        'image.*',
        'affiliates.characters_id.*',
        'abilities.abilities_id.*'
      ],
    })
  )
})

// Handle Directus returning an array
const character = computed(() => data.value?.[0] || null)

// Dynamic page title
useHead({
  title: computed(() => character.value?.name || 'Character Page'),
})
</script>
