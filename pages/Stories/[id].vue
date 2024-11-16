<template>
  <div>
    <!-- Container for demo purpose -->
    <div class="container my-5 py-5">
      <!-- Section: Design Block -->
      <section class="mb-10">
        <img :src="`${stories?.image?.filename_disk}`" class="img-fluid shadow-1-strong rounded-5 mb-4"
          :alt="stories?.name" />

        <div class="row align-items-center mb-4">
          <div class="col-lg-7">
            <span> Published <u>{{ new Date(story?.date_created).toLocaleDateString() }}</u></span>
          </div>
        </div>

        <h1 class="fw-bold mb-4">
          {{ stories?.name }}
        </h1>

        <p>
          {{ stories?.description }}
        </p>
      </section>
    </div>

    <v-divider></v-divider>
    <comments />
  </div>
</template>

<script setup>
  import comments from '~/components/partials/comments.vue'
  
  const route = useRoute()
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: story
    } = await useAsyncData('story', () => {
        return $directus.request($readItem('stories', route.params.id))
    })

    useHead({
        title: computed(() => story?.value?.name || 'Story Page')
    })
</script>