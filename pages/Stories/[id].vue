<template>
  <div>
    <!-- Container for demo purpose -->
    <div class="container my-5 py-5">

      <!-- Section: Design Block -->
      <section class="mb-10">
        <img :src="`${stories.content.image.filename}`" class="img-fluid shadow-1-strong rounded-5 mb-4"
          :alt="stories.name" />

        <div class="row align-items-center mb-4">
          <div class="col-lg-7">
            <span> Published <u>{{ stories.created_at }}</u></span>
          </div>
        </div>

        <h1 class="fw-bold mb-4">
          {{ stories.name }}
        </h1>

        <p>
          {{ stories.description }}
        </p>
      </section>

    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      url: 'http://meeovicms.com:8007'
    }),
  }
</script>

<script setup>
  const {
    getItemById
  } = useDirectusItems();

  const stories = await getItemById({
    collection: "stories",
    id: 1
  });

  useHead({
    title: stories.name,
  })
</script>