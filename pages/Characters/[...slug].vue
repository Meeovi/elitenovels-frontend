<template>
  <div>
    <section data-bs-version="5.1" class="features7 stepm5 cid-uLEiKNmlwj" id="afeatures7-1r">
      <div class="container-fluid">
        <div class="row justify-content-start align-items-stretch">
          <div class="card col-12 col-lg-6">
            <div class="card-wrapper">
              <h4 class="card-title mbr-fonts-style align-center display-5">
                <strong>{{ character?.universe?.universe_id?.name }}</strong>
              </h4>
              <div class="image-wrapper">
                <!--<NuxtImg src="assets/images/features8.jpg" :alt="character?.name" />-->
                {{ character.name }}
              </div>
              <p class="mbr-text mbr-fonts-style align-center display-4" v-html="character?.description"></p>
              <div class="mbr-section-btn align-center">
                <p class="btn btn-white-outline display-7" v-html="character?.type"></p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="image-wrapper">
              <NuxtImg
                :src="`${$directus.url}assets/${character?.image?.filename_disk} || '../../../assets/images/coming_soon.png'`"
                :alt="character?.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-bs-version="5.1" class="features5 stepm5 cid-uLEh7eZjEW" id="afeatures5-1p">
      <div class="container-fluid">
        <div class="row justify-content-start align-items-stretch">
          <div class="mbr-section-head">
            <h4 class="mbr-section-title mbr-fonts-style mb-0 display-2">Character Details</h4>
            <h5 class="mbr-section-subtitle mbr-fonts-style mb-0 display-2"><strong><br><br></strong></h5>
          </div>
          <div class="card col-12">
            <div class="card-wrapper">
              <div class="item">
                <p class="item-title mbr-fonts-style display-4">
                  Name
                </p>
                <p class="mbr-text mbr-fonts-style display-4">
                  {{ character.name }}
                </p>
                <div class="icon-wrap">
                  <span class="mbr-iconfont mobi-mbri mobi-mbri-growing-chart"></span>
                </div>
              </div>
              <div class="item">
                <p class="item-title mbr-fonts-style display-4">
                  Age
                </p>
                <p class="mbr-text mbr-fonts-style display-4">
                  {{ character.age }}
                </p>
                <div class="icon-wrap">
                  <span class="mbr-iconfont mobi-mbri mobi-mbri-growing-chart"></span>
                </div>
              </div>
              <div class="item">
                <p class="item-title mbr-fonts-style display-4">
                  Alias
                </p>
                <p class="mbr-text mbr-fonts-style display-4">
                  {{ character.alias }}
                </p>
                <div class="icon-wrap">
                  <span class="mbr-iconfont mobi-mbri mobi-mbri-growing-chart"></span>
                </div>
              </div>
              <div class="item">
                <p class="item-title mbr-fonts-style display-4">
                  Affiliates
                </p>
                <div v-for="affiliates in character?.characters" :key="affiliates">
                  <NuxtLink :to="`/characters/${affiliates?.characters_id?.id}`">{{ affiliates?.characters_id?.name }}
                  </NuxtLink>
                  &nbsp;
                </div>
                <div class="icon-wrap">
                  <span class="mbr-iconfont mobi-mbri mobi-mbri-growing-chart"></span>
                </div>
              </div>
              <div class="item" v-if="character?.type === 'Monster'">
                <p class="item-title mbr-fonts-style display-4">
                  Level
                </p>
                <div v-for="level in character?.characterLevel" :key="level">
                  <NuxtLink :to="`/characters/category/${level?.options_id?.id}`">{{ level?.options_id?.name }}</NuxtLink>
                  &nbsp;
                </div>
                <div class="icon-wrap">
                  <span class="mbr-iconfont mobi-mbri mobi-mbri-growing-chart"></span>
                </div>
              </div>
              <div class="item" v-if="character?.type === 'Monster'">
                <p class="item-title mbr-fonts-style display-4">
                  Type
                </p>
                <div v-for="type in character?.characterType" :key="type">
                  <NuxtLink :to="`/characters/category/${type?.options_id?.id}`">{{ type?.options_id?.name }}</NuxtLink>
                  &nbsp;
                </div>
                <div class="icon-wrap">
                  <span class="mbr-iconfont mobi-mbri mobi-mbri-growing-chart"></span>
                </div>
              </div>
              <div class="item">
                <p class="item-title mbr-fonts-style display-4">
                  Abilities
                </p>
                <div v-for="abilities in character?.abilities" :key="abilities">
                  <NuxtLink :to="`/characters/category/${abilities?.abilities?.id}`">{{ abilities?.abilities?.name }}</NuxtLink>
                  &nbsp;
                </div>
                <div class="icon-wrap">
                  <span class="mbr-iconfont mobi-mbri mobi-mbri-growing-chart"></span>
                </div>
              </div>
              <div class="item">
                <p class="item-title mbr-fonts-style display-4">
                  Topics
                </p>
                <div v-for="topics in character?.characters" :key="topics">
                  <NuxtLink :to="`/characters/category/${topics?.tags_id?.id}`">{{ topics?.tags_id?.name }}</NuxtLink>
                  &nbsp;
                </div>
                <div class="icon-wrap">
                  <span class="mbr-iconfont mobi-mbri mobi-mbri-growing-chart"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <v-row>
      <div class="characterLowerPage">
        <v-row>
          <v-col cols="12">
            <h3>Items</h3>
            <v-row>
              <v-col cols="4" v-for="items in characterItems" :key="items">
                <item :item="items?.items_id" />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <h3>Places</h3>
            <v-row>
              <v-col cols="4" v-for="places in characterPlaces" :key="places">
                <item :place="places?.options_id" />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <h3>Stories</h3>
            <v-row>
              <v-col cols="4" v-for="stories in character?.character_stories" :key="stories">
                <story :story="stories?.stories_id" />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <h3>Videos</h3>
            <v-row>
              <v-col cols="4" v-for="videos in character?.character_video" :key="videos">
                <videoComponent :video="videos?.videos_id" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>

      <relatedcharacters />
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
  import item from '~/components/Related/facet.vue'
  import relatedcharacters from '~/components/Related/relatedcharacters.vue'
  import videoComponent from '~/components/Related/video.vue'
  import story from '~/components/Related/story.vue'

  const route = useRoute()
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: character
  } = await useAsyncData('character', () => {
    return $directus.request($readItem('characters', route.params.id, {
      fields: ['*',
        'abilities.abilities_id.*',
        'tags.tags_id.*',
        'options.options_id.*',
        'videos.videos_id.*',
        'universe.universe_id.*',
        'stories.stories_id.*',
        'image.*',
      ],
    }))
  })

  const {
    data: characterPlaces
  } = await useAsyncData('characterPlaces', () => {
    return $directus.request($readItem('characters', route.params.id, {
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
        options: {
          options_id: {
            type: {
              _eq: 'Places'
            }
          }
        }
      }
    }))
  })

  const {
    data: characterItems
  } = await useAsyncData('characterItems', () => {
    return $directus.request($readItem('characters', route.params.id, {
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
        options: {
          options_id: {
            type: {
              _eq: 'Items'
            }
          }
        }
      }
    }))
  })

const {
    data: characterLevel
  } = await useAsyncData('characterLevel', () => {
    return $directus.request($readItem('characters', route.params.id, {
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
        options: {
          options_id: {
            type: {
              _eq: 'Level'
            }
          }
        }
      }
    }))
  })

  const {
    data: characterType
  } = await useAsyncData('characterType', () => {
    return $directus.request($readItem('characters', route.params.id, {
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
        options: {
          options_id: {
            type: {
              _eq: 'Type'
            }
          }
        }
      }
    }))
  })

  useHead({
    title: computed(() => character?.value?.name || 'Character Page')
  })
</script>