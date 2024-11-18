<template>
    <div>
    <v-card elevation="0">
        <v-toolbar style="background-color: blue; color: white;">
            <v-toolbar-title>Level - {{ level?.name }}</v-toolbar-title>
        </v-toolbar>
        <v-tabs v-model="tab" style="background-color: blue; color: white;">
            <v-tab value="one">All</v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="one">
                    <v-row>
                        <v-col cols="12">
                            <v-card elevation="0">
                                <v-card-text>{{ level?.description }}</v-card-text>
                            </v-card>
                        </v-col>
                        <!-- Update v-for to correctly access nested character data -->
                        <v-col cols="3" v-for="char in level?.characters" :key="char?.characters_id?.id">
                            <characters :character="char?.characters_id" />
                        </v-col>
                    </v-row>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import characters from '~/components/Related/character.vue'
//import characterbar from '~/components/Menus/characterbar.vue'

const tab = ref(null)
const route = useRoute()
const { $directus, $readItem } = useNuxtApp()

// Get the specific level and its level
const { data: level } = await useAsyncData('level', () => {
    return $directus.request($readItem('levels', route.params.id, {
        fields: ['*', '*.*.*'],
    }))
})

useHead({
    title: computed(() => level?.value?.name || 'Level Page')
})
</script>
