<template>
    <div>
        <v-card elevation="0">
            <v-toolbar style="background-color: blue; color: white;">
                <v-toolbar-title>Place - {{ place?.name }}</v-toolbar-title>
            </v-toolbar>
            <v-tabs v-model="tab" style="background-color: blue; color: white;">
                <v-tab value="one">All</v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <v-row>
                            <v-col cols="4">
                                <div v-if="place?.image?.filename_disk">
                                    <img class="align-end text-white" height="100"
                                        :src="`${$directus.url}/assets/${place?.image?.filename_disk} || '../../../assets/images/coming_soon.png'`"
                                        cover />
                                </div>

                                <div v-else>
                                    <img class="align-end text-white" height="100" src="~/assets/images/coming_soon.png"
                                        cover />
                                </div>
                            </v-col>
                            <v-col cols="8">
                                <v-card elevation="0">
                                    <v-card-text>{{ place?.description }}</v-card-text>
                                    <v-card-text>Location: {{ place?.location }}</v-card-text>
                                </v-card>
                            </v-col>

                            <div class="characterLowerPage">
                                <v-row>
                                    <v-col cols="12">
                                        <h3>Items</h3>
                                        <v-row>
                                            <v-col cols="4" v-for="items in place?.items" :key="items">
                                                <item :item="items?.items_id" />
                                            </v-col>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12">
                                        <h3>Stories</h3>
                                        <v-row>
                                            <v-col cols="4" v-for="stories in place?.stories" :key="stories">
                                                <story :story="stories?.stories_id" />
                                            </v-col>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12">
                                        <h3>Videos</h3>
                                        <v-row>
                                            <v-col cols="4" v-for="videos in place?.videos" :key="videos">
                                                <video :video="videos?.videos_id" />
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>
                            <!-- Update v-for to correctly access nested character data -->
                            <v-col cols="12">
                                <h3>Characters in this place</h3>
                                <v-row>
                                    <v-col cols="3" v-for="char in place?.characters" :key="char?.characters_id?.id">
                                        <characters :character="char?.characters_id" />
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
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
    import characters from '~/components/Related/character.vue'
    //import characterbar from '~/components/Menus/characterbar.vue'

    const tab = ref(null)
    const route = useRoute()
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    // Get the specific place and its place
    const {
        data: place
    } = await useAsyncData('place', () => {
        return $directus.request($readItem('places', route.params.id, {
            fields: ['*', '*.*.*'],
        }))
    })

    useHead({
        title: computed(() => place?.value?.name || 'Place Page')
    })
</script>