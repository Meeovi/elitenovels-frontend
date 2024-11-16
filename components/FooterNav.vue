<template>
    <v-footer border>
        <v-row justify="center" no-gutters>
            <div v-for="(menu, index) in footerNav?.menus" :key="index">
                <v-btn variant="text" class="mx-2" rounded="xl" :href="`${menu?.url}`">
                    {{ menu?.name }}
                </v-btn>
            </div>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong><a
                        :href="footerNav?.url">{{ footerNav?.description }}</a></strong>
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
        data: footerNav
    } = await useAsyncData('footerNav', () => {
        return $directus.request($readItem('navigation', '7'))
    })
</script>