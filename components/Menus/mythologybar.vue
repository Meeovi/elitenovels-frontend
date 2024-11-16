<template>
    <v-card class="lowerbar" variant="text">
        <v-tabs style="background-color: lightgreen; color: black;" center-active>
            <div v-for="(menu, index) in mythologybar?.menus" :key="index">
            <h5>{{ mythologybar?.name }}</h5>
                <v-tab>
                    <a :href="menu?.url">{{ menu?.name }}</a>
                </v-tab>
            </div>
        </v-tabs>
    </v-card>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: mythologybar
    } = await useAsyncData('mythologybar', () => {
        return $directus.request($readItem('navigation', '5'))
    })
</script>