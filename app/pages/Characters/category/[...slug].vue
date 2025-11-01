<template>
    <div>
        <v-toolbar :style="`background-color: ${tag?.color};`">
            <v-toolbar-title v-if="tag">{{ tag?.name }}</v-toolbar-title>
        </v-toolbar>
        <v-card elevation="0">
            <div v-if="tag?.name === 'Gods and Goddesses'">
                <mythologybar />
            </div>
            <div v-else-if="tag?.name === 'Monsters'">
                <monsterbar />
            </div>
            <div v-else>
                <v-tabs v-model="tab" style="background-color: cadetblue; color: white;" center-active>
                    <v-tab value="one">All</v-tab>
                </v-tabs>
            </div>
            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <div v-if="tag?.characters?.length">
                            <v-row>
                                <v-col cols="3" v-for="char in tag?.characters" :key="char.characters_id.id">
                                    <characters :character="char?.characters_id" />
                                </v-col>
                            </v-row>
                        </div>

                        <div v-else-if="tag?.options?.length">
                            <v-row>
                                <v-col cols="3" v-for="facet in tag?.options" :key="facet.options_id.id">
                                    <facet :facet="facet?.options_id" />
                                </v-col>
                            </v-row>
                        </div>

                        <div v-else-if="tag?.stories?.length">
                            <v-col cols="3" v-for="story in tag?.stories" :key="story.stories_id.id">
                                <storyCard :story="story?.stories_id" />
                            </v-col>
                        </div>

                        <div v-else>
                            <v-row>
                                <v-col cols="12">
                                    <p>{{ pageBlock?.description }}</p>
                                </v-col>
                            </v-row>
                        </div>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        useRoute
    } from 'vue-router'
    import characters from '~/components/related/character.vue'
    import characterbar from '~/components/menus/characterbar.vue'
    import mythologybar from '~/components/menus/mythologybar.vue'
    import monsterbar from '~/components/menus/monsterbar.vue'
    import facet from '~/components/related/facet.vue'
    import storyCard from '~/components/related/story.vue'

    const tab = ref(null)
    const route = useRoute()
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    // Get the specific tag and its characters
    const {
        data: tagData
    } = await useAsyncData('tagData', () => {
        return $directus.request($readItems('tags', {
            fields: [
                '*',
                'characters.characters_id.*',
                'options.options_id.*',
                'stories.stories_id.*'
            ],
            filter: {
                slug: {
                    _eq: `${route.params.slug}`
                }
            },
        }))
    })

    const {
        data: pageBlock
    } = await useAsyncData('pageBlock', () => {
        return $directus.request($readItem('blocks', '9', {
            fields: ['*', {
                '*': ['*']
            }],
        }))
    })

    // Get the first (and should be only) tag from the result
    const tag = computed(() => tagData.value?.[0])

    useHead({
        title: computed(() => tag.value?.name || 'Tag Page')
    })
</script>