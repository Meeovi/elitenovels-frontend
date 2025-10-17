<template>
    <v-card elevation="0">
        <div v-if="tag?.name === 'Gods and Goddesses'">
            <mythologybar />
        </div>
        <div v-else-if="tag?.name === 'Angels'">
            <mythologybar />
        </div>
        <div v-else-if="tag?.name === 'Demons'">
            <mythologybar />
        </div>
        <div v-else-if="tag?.name === 'Mythical Creatures'">
            <mythologybar />
        </div>
        <div v-else-if="tag?.name === 'Other Myths'">
            <mythologybar />
        </div>
        <div v-else-if="tag?.name === 'Magical'">
            <mythologybar />
        </div>
        <div v-else-if="tag?.name === 'Monsters'">
            <monsterbar />
        </div>
        <div v-else>
            <characterbar />
        </div>
        <v-toolbar style="background-color: powderblue;">
            <v-toolbar-title v-if="tag">{{ tag?.name }}</v-toolbar-title>
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
                            <characters :character="char?.characters_id" />
                        </v-col>
                    </v-row>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
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

    const tab = ref(null)
    const route = useRoute()
    const {
        $directus,
        $readItems
    } = useNuxtApp()

    // Get the specific tag and its characters
    const {
        data: tagData
    } = await useAsyncData('tagData', () => {
        return $directus.request($readItems('tags', {
            fields: ['*', 'characters.characters_id.*'],
            filter: {
                slug: {
                    _eq: `${route.params.slug}`
                }
            },
        }))
    })

    // Get the first (and should be only) tag from the result
    const tag = computed(() => tagData.value?.[0])

    useHead({
        title: computed(() => tag.value?.name || 'Tag Page')
    })
</script>