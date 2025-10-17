<template>
    <v-card class="lowerbar" variant="text">
        <v-tabs style="background-color: powderblue; color: black;" center-active>
            <div v-for="(menu, index) in gamesbar?.menus" :key="index">
            <h5>{{ gamesbar?.name }}</h5>
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
        data: gamesbar
    } = await useAsyncData('gamesbar', () => {
        return $directus.request($readItem('navigation', '3'))
    })
</script>