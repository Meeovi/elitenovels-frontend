<template>
    <div class="contentPage">
      <h1 style="text-align: center;">{{ page?.name }}</h1>
      <div v-html="page?.content"></div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const route = useRoute();
    const { $directus, $readItems } = useNuxtApp()

    const {
    data: page
    } = await useAsyncData('page', () => {
    return $directus.request($readItems('pages', {
        filter: {
        slug: { _eq: `${route.params.slug}` }
        },
        fields: ['*'],
        limit: 1
    })).then(response => response?.[0]) // Get first item from response
    })

    useHead({
        title: computed(() => page?.value?.name || 'Page Name')
    })
</script>