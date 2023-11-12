<template>
  <div>
    <div class="container my-5">

      <section class="mb-10">

        <div class="d-flex justify-content-between align-items-center align-items-xl-end border-bottom pb-4 mb-5"
          style="border-bottom: 2px solid #f5f5f5 !important;">
          <h2 class="fw-bold mb-0">Eliteverse Stories</h2>
        </div>
        <div class="row gx-md-5">
          <div class="col-md-12 col-lg-4" v-for="stories in data.StoriesItems.items" :key="stories.id">
            <a :href="`/stories/${stories.id}`">
              <div class="mb-5">
                <div class="bg-image hover-overlay hover-zoom ripple rounded-5 mb-4" data-mdb-ripple-color="light">
                  <img class="w-100" :src="`${stories.content.image.filename}`"
                    style="height: 225px; object-fit: cover;" alt="Image placeholder" />

                  <div class="mask" style="background-color: rgba(255,255,255,0.1);"></div>
                </div>
                <h6 class="text-muted text-uppercase small pb-1"><a href="#!"
                    class="text-reset">{{ stories.content.name }}</a></h6>
                <h5 class="fw-bold mb-3"><a href="#!" class="text-reset">{{ stories.content.excerpt }}</a></h5>
              </div>
            </a>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      //url: 'http://meeovicms.com:8007'
    }),
  }
</script>

<script setup>
  const query = gql `
  query {
  StoriesItems(sort_by: "name") {
    items {
      id
      content {
        name
        excerpt
        description
        image {
          filename
        }
      }
      created_at
    }
  }
}
`

  const {
    data
  } = await useAsyncQuery(query)

  /* const {
     getItems
   } = useDirectusItems()

   const stories = await getItems({
     collection: "stories"
   });*/
  useHead({
    title: 'Stories',
  })
</script>