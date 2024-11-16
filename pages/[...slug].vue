<!----><template>
    <div class="contentPage">
      <h1 style="text-align: center;">{{ page?.name }}</h1>
      <div v-html="page?.content" />
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const route = useRoute();
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: page
    } = await useAsyncData('page', () => {
        return $directus.request($readItem('pages', route.params.id))
    })

    useHead({
        title: computed(() => page?.value?.name || 'Page Name')
    })
</script>