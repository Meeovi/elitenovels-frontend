<template>
  <div>
    <div class="container my-5">
      <section class="mb-10">
        <div class="d-flex justify-content-between align-items-center align-items-xl-end border-bottom pb-4 mb-5"
          style="border-bottom: 2px solid #f5f5f5 !important;">
          <h2 class="fw-bold mb-0">Eliteverse Stories</h2>
        </div>
        <div class="row gx-md-5">
          <div class="col-md-12 col-lg-4" v-for="stories in stories" :key="stories">
            <story :story="stories" />
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
        data: stories
    } = await useAsyncData('stories', () => {
        return $directus.request($readItems('stories'))
    })

  useHead({
    title: 'Stories',
  })
</script>