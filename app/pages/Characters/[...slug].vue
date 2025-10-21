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
              <img v-if="character?.image?.filename_disk"
                :src="`${$directus.url}assets/${character.image.filename_disk}`" :alt="character.name" />
              <img v-else src="/assets/images/coming_soon.png"
                :alt="character?.name || 'Character image placeholder'" />
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

              <!-- AFFILIATES (comma-separated) -->
              <div class="item" v-if="affiliatesList.length">
                <p class="item-title mbr-fonts-style display-4">Affiliates</p>
                <p class="mbr-text mbr-fonts-style display-4">
                  <span v-for="(af, idx) in affiliatesList" :key="af.id || af.slug || idx">
                    <NuxtLink v-if="af.slug" :to="`/characters/${af.slug}`">{{ af.name }}</NuxtLink>
                    <span v-else>{{ af.name }}</span>
                    <span v-if="idx < affiliatesList.length - 1">, </span>
                  </span>
                </p>
              </div>

              <!-- ABILITIES (filtered and comma-separated) -->
              <div class="item" v-if="abilitiesList.length">
                <p class="item-title mbr-fonts-style display-4">
                  Abilities
                </p>
                <p class="abilitiesList">
                  <span v-for="(abilities, index) in abilitiesList" :key="abilities.slug || abilities.name || index">
                    <NuxtLink class="mbr-text mbr-fonts-style display-4" v-if="abilities.slug"
                      :to="`/facet/${abilities.slug}`">{{ abilities.name }}</NuxtLink>
                    <span v-else>{{ abilities.name }}</span>
                    <span v-if="index < abilitiesList.length - 1">, </span>
                  </span>
                </p>
                <div class="icon-wrap">
                  <span class="mbr-iconfont mobi-mbri mobi-mbri-growing-chart"></span>
                </div>
              </div>

              <!-- TOPICS / TAGS (comma-separated) -->
              <div class="item" v-if="tagsList.length">
                <p class="item-title mbr-fonts-style display-4">Topics</p>
                <p class="mbr-text mbr-fonts-style display-4">
                  <span v-for="(t, idx) in tagsList" :key="t.id || t.slug || idx">
                    <NuxtLink v-if="t.slug" :to="`/characters/category/${t.slug}`">{{ t.name }}</NuxtLink>
                    <span v-else>{{ t.name }}</span>
                    <span v-if="idx < tagsList.length - 1">, </span>
                  </span>
                </p>
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
        <v-col cols="12" v-if="character?.character_options?.some(opt => opt.options_id?.type === 'Items')">
          <h3>Items</h3>
          <v-row>
            <v-col cols="4" v-for="(opt, i) in character.character_options" :key="i"
              v-if="opt.options_id?.type === 'Items'">
              <item :item="opt.options_id" />
            </v-col>
          </v-row>
        </v-col>

        <!-- PLACES -->
        <v-col cols="12" v-if="character?.character_options?.some(opt => opt.options_id?.type === 'Places')">
          <h3>Places</h3>
          <v-row>
            <v-col cols="4" v-for="(opt, i) in character.character_options" :key="i"
              v-if="opt.options_id?.type === 'Places'">
              <item :place="opt.options_id" />
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
  import {
    useRoute
  } from 'vue-router'
  import {
    computed
  } from 'vue'
  import {
    useHead
  } from '#imports'
  import comments from '~/components/partials/comments.vue'
  import item from '~/components/related/facet.vue'
  import relatedcharacters from '~/components/related/relatedcharacters.vue'
  import videoComponent from '~/components/related/video.vue'
  import story from '~/components/related/story.vue'

  const route = useRoute()
  const {
    $directus,
    $readItems
  } = useNuxtApp()

  // Fetch character data by slug
  const {
    data
  } = await useAsyncData('character', () => {
    return $directus.request(
      $readItems('characters', {
        filter: {
          slug: {
            _eq: `${route.params.slug}`
          }
        },
        fields: [
          '*',
          'tags.tags_id.*',
          'character_options.options_id.*',
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

  // Compute normalized abilities list (name, slug)
  const abilitiesList = computed(() => {
    const c = character.value || {}
    // Direct array of abilities (e.g. abilities: [{ abilities_id: {...} }])
    if (Array.isArray(c.abilities) && c.abilities.length) {
      return c.abilities
        .map(a => a?.abilities_id || a)
        .map(x => ({
          name: x?.name || x?.title || '',
          slug: x?.slug
        }))
        .filter(x => x.name)
    }

    // Fallback: character_options where options_id.type === 'Abilities'
    if (Array.isArray(c.character_options) && c.character_options.length) {
      return c.character_options
        .map(opt => opt?.options_id || opt?.characters_id || {})
        .filter(o => o && (o.type === 'Abilities' || o.type === 'Ability' || o.type === 'abilities'))
        .map(o => ({
          name: o?.name || o?.title || '',
          slug: o?.slug
        }))
        .filter(x => x.name)
    }

    return []
  })

  // Compute normalized affiliates list (name, slug, id)
  const affiliatesList = computed(() => {
    const c = character.value || {}
    if (Array.isArray(c.affiliates) && c.affiliates.length) {
      return c.affiliates
        .map(a => a?.characters_id || a)
        .map(x => ({ id: x?.id, name: x?.name || x?.title || '', slug: x?.slug }))
        .filter(x => x.name)
    }
    return []
  })

  // Compute normalized tags list (name, slug, id)
  const tagsList = computed(() => {
    const c = character.value || {}
    if (Array.isArray(c.tags) && c.tags.length) {
      return c.tags
        .map(t => t?.tags_id || t)
        .map(x => ({ id: x?.id, name: x?.name || x?.title || '', slug: x?.slug }))
        .filter(x => x.name)
    }
    return []
  })

  // Dynamic page title
  useHead({
    title: computed(() => character.value?.name || 'Character Page')
  })

  // Dynamic page title
  useHead({
    title: computed(() => character.value?.name || 'Character Page'),
  })
</script>