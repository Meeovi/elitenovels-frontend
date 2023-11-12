<template>
  <div>
    <div class="container my-5">
      <section class="mb-10">
        <div class="d-flex justify-content-between align-items-center align-items-xl-end border-bottom pb-4 mb-5"
          style="border-bottom: 2px solid #f5f5f5 !important;">
          <h2 class="fw-bold mb-0">Eliteverse Videos</h2>
        </div>
        <div class="row gx-md-5">
          <div class="col-md-4 col-lg-4" v-for="videos in data.VideoItems.items" :key="videos.id">
            <v-card color="white" :class="['ma-4', selectedClass]" height="320" width="350">
              <video :src="`$${videos.video.filename}`" controls height="250" width="350"></video>
              <v-card-title>{{ videos.content.name }}</v-card-title>
            </v-card>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          //url: 'http://meeovicms.com:8007'
      }
  }
}
</script>

<script setup>
const query = gql`
  query {
  VideoItems {
    items {
      content {
        name
        video {
          filename
        }
      }
    }
  }
}
`

const { data } = await useAsyncQuery(query)
/*const { getItems } = useDirectusItems()

const videos = await getItems({ collection: "videos" });*/

  useHead({
    title: 'Videos',
  })
</script>