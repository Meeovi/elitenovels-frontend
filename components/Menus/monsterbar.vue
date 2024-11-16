<template>
    <v-card class="lowerbar" variant="text">
        <v-tabs style="background-color: sienna; color: white;" center-active>
            <div v-for="(menu, index) in monsterbar?.menus" :key="index">
            <h5>{{ monsterbar?.name }}</h5>
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
        data: monsterbar
    } = await useAsyncData('monsterbar', () => {
        return $directus.request($readItem('navigation', '4'))
    })
</script>