<template>
  <div>
    <div class="container my-5">
      <section class="mb-10">
        <div class="d-flex justify-content-between align-items-center align-items-xl-end border-bottom pb-4 mb-5"
          style="border-bottom: 2px solid #f5f5f5 !important;">
          <h2 class="fw-bold mb-0">Eliteverse Videos</h2>
        </div>
        <div class="row gx-md-5">
          <div class="col-md-4 col-lg-4" v-for="videos in videos" :key="videos">
            <v-card color="white" :class="['ma-4', selectedClass]" height="320" width="350">
              <video :src="`$${videos?.video?.filename_disk}`" controls height="250" width="350"></video>
              <v-card-title>{{ videos?.name }}</v-card-title>
            </v-card>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: videos
    } = await useAsyncData('videos', () => {
        return $directus.request($readItems('videos', {
            fields: ['*', { '*': ['*'] }]
        }))
    })

  useHead({
    title: 'Videos',
  })
</script>