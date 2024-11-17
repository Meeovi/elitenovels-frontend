<template>
    <v-card elevation="0">
        <characterbar />
        <v-toolbar style="background-color: powderblue;">
            <v-toolbar-title v-if="tag">{{ tag.name }}</v-toolbar-title>
        </v-toolbar>
        <v-tabs v-model="tab" style="background-color: powderblue;">
            <v-tab value="one">All</v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="one">
                    <v-row>
                        <!-- Update v-for to correctly access nested character data -->
                        <v-col cols="3" v-for="char in tag?.characters" :key="char.characters_id.id">
                            <characters :character="char.characters_id" />
                        </v-col>
                    </v-row>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import comments from '~/components/partials/comments.vue'
import characters from '~/components/related/character.vue'
import characterbar from '~/components/Menus/characterbar.vue'
import place from '~/components/related/place.vue'

const tab = ref(null)
const route = useRoute()
const { $directus, $readItems } = useNuxtApp()

// Get the specific tag and its characters
const { data: tagData } = await useAsyncData('tag', () => {
    return $directus.request($readItems('tags', {
        fields: ['*', 'characters.characters_id.*'],
        filter: {
            slug: {
                _eq: route.params.slug
            }
        }
    }))
})

// Get the first (and should be only) tag from the result
const tag = computed(() => tagData.value?.[0])

useHead({
    title: computed(() => tag.value?.name || 'Tag Page')
})
</script>
