<template>
    <div>
      <div class="container my-5">
  
        <section class="mb-10">
  
          <div class="d-flex justify-content-between align-items-center align-items-xl-end border-bottom pb-4 mb-5"
            style="border-bottom: 2px solid #f5f5f5 !important;">
            <h2 class="fw-bold mb-0">Latest Articles</h2>
          </div>
          <div class="row gx-lg-5">
            <div class="col-lg-8" v-for="blog in data.BlogItems.items" :key="blog">
              <a :href="`/blog/${blog.id}`"><div class="mb-5">
                <div class="bg-image hover-overlay hover-zoom ripple rounded-6 mb-4" data-mdb-ripple-color="light">
                  <img class="w-100" :src="`${blog.content.image.filename}`"
                    style="max-height: 475px; object-fit: cover;" :alt="blog.content.name" />
                    <div class="mask" style="background-color: rgba(255,255,255,0.1);"></div>
                  
                </div>
                <h6 class="text-muted text-uppercase small pb-1">{{ blog.content.name }}</h6>
                <h4 class="fw-bold mb-3">{{blog.created_at}}</h4>
                <p class="text-truncate"
                  style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; white-space: normal">
                  {{ blog.content.excerpt }}
                </p>
              </div></a>
            </div>
            <div class="col-lg-4">
              <div class="mb-5" v-for="blog in data.BlogItems.items" :key="blog.id">
                <a :href="`/blog/${blog.id}`">
                <div class="bg-image hover-overlay hover-zoom ripple rounded-5 mb-4" data-mdb-ripple-color="light">
                  <img class="w-100" :src="`${blog.content.image.filename}`"
                    style="height: 227px; object-fit: cover;" :alt="blog.content.name" />
                    <div class="mask" style="background-color: rgba(255,255,255,0.1);"></div>
                </div>
                <h6 class="text-muted text-uppercase small pb-1">{{ blog.content.name }}</h6>
                <h5 class="fw-bold mb-3">{{ blog.content.excerpt }}</h5>
                </a>
              </div>
            </div>
          </div>
  
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
const query = gql `
query {
  BlogItems {
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
  /*  const {
      getItems
    } = useDirectusItems()
  
    const blog = await getItems({ collection: "blog" });*/
    
    useHead({
      title: 'Blog',
    })
  </script>