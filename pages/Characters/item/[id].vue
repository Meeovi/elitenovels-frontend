<template>
    <div>
        <v-card elevation="0">
            <v-toolbar style="background-color: blue; color: white;">
                <v-toolbar-title>Item - {{ item?.name }}</v-toolbar-title>
            </v-toolbar>
            <v-tabs v-model="tab" style="background-color: blue; color: white;">
                <v-tab value="one">All</v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <v-row>
                            <v-col cols="4">
                                <div v-if="item?.image?.filename_disk">
                                    <img class="align-end text-white" height="100"
                                        :src="`${$directus.url}/assets/${item?.image?.filename_disk} || '../../../assets/images/coming_soon.png'`"
                                        cover />
                                </div>

                                <div v-else>
                                    <img class="align-end text-white" height="100" src="~/assets/images/coming_soon.png"
                                        cover />
                                </div>
                            </v-col>
                            <v-col cols="8">
                                <v-card elevation="0">
                                    <v-card-text>{{ item?.description }}</v-card-text>
                                    <div style="display: flex; padding-right: 5px;">Abilities:&nbsp;
                                        <div v-for="abilities in item?.abilities" :key="abilities">
                                            <a
                                                :href="`/characters/ability/${abilities?.abilities_id?.id}`">{{ abilities?.abilities_id?.name }}</a>
                                            &nbsp;
                                        </div>
                                    </div>
                                    <v-spacer></v-spacer>

                                    <div style="display: flex; padding-right: 5px;">Affiliates:&nbsp;
                                        <div v-for="affiliates in item?.characters" :key="affiliates">
                                            <a
                                                :href="`/characters/${affiliates?.characters_id?.id}`">{{ affiliates?.characters_id?.name }}</a>
                                            &nbsp;
                                        </div>
                                    </div>
                                </v-card>
                            </v-col>

                            <div class="characterLowerPage">
                                <v-row>
                                    <v-col cols="12">
                                        <h3>Places</h3>
                                        <v-row>
                                            <v-col cols="4" v-for="places in item?.places" :key="places">
                                                <place :place="places?.places_id" />
                                            </v-col>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12">
                                        <h3>Stories</h3>
                                        <v-row>
                                            <v-col cols="4" v-for="stories in item?.stories" :key="stories">
                                                <story :story="stories?.stories_id" />
                                            </v-col>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12">
                                        <h3>Videos</h3>
                                        <v-row>
                                            <v-col cols="4" v-for="videos in item?.videos" :key="videos">
                                                <video :video="videos?.videos_id" />
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>

                            <v-col cols="12">
                                <h3>Characters with this Item</h3>
                                <v-row>
                                    <v-col cols="3" v-for="char in item?.characters" :key="char?.characters_id?.id">
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

    // Get the specific item and its item
    const {
        data: item
    } = await useAsyncData('item', () => {
        return $directus.request($readItem('items', route.params.id, {
            fields: ['*', '*.*.*'],
        }))
    })

    useHead({
        title: computed(() => item?.value?.name || 'Item Page')
    })
</script>