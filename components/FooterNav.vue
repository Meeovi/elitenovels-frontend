<template>
    <v-footer border>
        <v-row justify="center" no-gutters>
            <v-col cols="4" class="md-pb">
                <NuxtImg :href="`${$directus.url}/assets/${footerBlock?.image?.filename_disk}`" />
            </v-col>
            <v-col cols="4" class="md-pb">
                <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
                    <strong>{{ aboutNav?.name }}</strong>
                </h2>
                <div v-for="child in aboutNav?.menus" :key="child.id">
                    <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4">
                        <NuxtLink :to="`${child.url}`">{{ child?.name }}</NuxtLink>
                    </h3>
                </div>
            </v-col>
            <v-col cols="4" class="md-pb">
                <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
                    <strong>{{ personalNav?.name }}</strong>
                </h2>
                <div v-for="child in personalNav?.menus" :key="child.id">
                    <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4">
                        <NuxtLink :to="`${child.url}`">{{ child?.name }}</NuxtLink>
                    </h3>
                </div>
            </v-col>
            <v-col class="text-center mt-4" v-for="(menu, index) in legalNav?.menus" :key="index">
                <div>
                    <NuxtLink :to="`${menu?.url}`">
                        {{ menu?.name }}
                    </NuxtLink>
                </div>
            </v-col>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>
                    <NuxtLink :to="copyrightNav?.url">{{ copyrightNav?.description }}</NuxtLink>
                </strong>
            </v-col>

        </v-row>
    </v-footer>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: aboutNav
    } = await useAsyncData('aboutNav', () => {
        return $directus.request($readItem('navigation', '2'))
    })

    const {
        data: legalNav
    } = await useAsyncData('legalNav', () => {
        return $directus.request($readItem('navigation', '3'))
    })

    const {
        data: personalNav
    } = await useAsyncData('personalNav', () => {
        return $directus.request($readItem('navigation', '4'))
    })

    const {
        data: copyrightNav
    } = await useAsyncData('copyrightNav', () => {
        return $directus.request($readItem('navigation', '5'))
    })

    const {
        data: footerBlock
    } = await useAsyncData('footerBlock', () => {
        return $directus.request($readItem('blocks', '1', {
            fields: ['*', {
                '*': ['*']
            }],
        }))
    })
</script>