<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar dark prominent color="#6592e6">
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

                <div v-if="character?.tags?.tags_id?.name === 'Human'">Age: {{ character?.age }}</div>
                <v-spacer></v-spacer>

                <div>Alias: {{ character?.alias }}</div>
                <v-spacer></v-spacer>

                <div style="display: flex; padding-right: 5px;">Abilities:&nbsp;
                  <div v-for="abilities in character?.abilities" :key="abilities">
                    <a :href="`/characters/ability/${abilities?.abilities_id?.id}`">{{ abilities?.abilities_id?.name }}</a> &nbsp;
                  </div>
                </div>
                <v-spacer></v-spacer>

                <div style="display: flex; padding-right: 5px;">Affiliates:&nbsp;
                  <div v-for="affiliates in character?.characters" :key="affiliates">
                    <a :href="`/characters/${affiliates?.characters_id?.id}`">{{ affiliates?.characters_id?.name }}</a> &nbsp;
                  </div>
                </div>

                <div>Universe: {{ character?.type }}</div>

                <div style="display: flex; padding-right: 5px;">Species:&nbsp;
                  <div v-for="species in character?.tags" :key="species">
                    <a :href="`/characters/category/${species?.tags_id?.id}`">{{ species?.tags_id?.name }}</a> &nbsp;
                  </div>
                </div>

                <div v-if="character?.types" style="display: flex; padding-right: 5px;">Types:&nbsp;
                  <div v-for="type in character?.types" :key="types">
                    <a :href="`/characters/type/${type?.types_id?.id}`">{{ type?.types_id?.name }}</a> &nbsp;
                  </div>
                </div>

                <div v-if="character?.levels" style="display: flex; padding-right: 5px;">Level:&nbsp;
                  <div v-for="level in character?.levels" :key="level">
                    <a :href="`/characters/level/${level?.levels_id?.id}`">{{ level?.levels_id?.name }}</a> &nbsp;
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>


      <div class="characterLowerPage">
        <v-row>
          <v-col cols="12">
            <h3>Items</h3>
            <v-row>
              <v-col cols="4" v-for="items in character?.items" :key="items">
                <item :item="items?.items_id" />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <h3>Places</h3>
            <v-row>
              <v-col cols="4" v-for="places in character?.places" :key="places">
                <place :place="places?.places_id" />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <h3>Stories</h3>
            <v-row>
              <v-col cols="4" v-for="stories in character?.stories" :key="stories">
                <story :story="stories?.stories_id" />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12">
            <h3>Videos</h3>
            <v-row>
              <v-col cols="4" v-for="videos in character?.videos" :key="videos">
                <video :video="videos?.videos_id" />
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
  import item from '~/components/Related/item.vue'
  import place from '~/components/Related/place.vue'
  import story from '~/components/Related/story.vue'
  import relatedcharacters from '~/components/Related/relatedcharacters.vue'
  import video from '~/components/Related/video.vue'

  const route = useRoute()
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: character
  } = await useAsyncData('character', () => {
    return $directus.request($readItem('characters', route.params.id, {
      fields: ['*', '*.*.*'],
    }))
  })

  useHead({
    title: computed(() => character?.value?.name || 'Character Page')
  })
</script>