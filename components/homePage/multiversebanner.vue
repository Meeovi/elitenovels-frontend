<template>
  <div>
    <v-toolbar title="POSTS FROM ACROSS THE MULTIVERSE" density="comfortable" color="transparent"></v-toolbar>
    <v-carousel v-for="blog in blog" :key="blog.id">
      <v-carousel-item :src="`${url}/assets/${blog.image.filename_disk}`" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data(){
      return {
          url: 'http://meeovicms.com:8007'
      }
  }
}
</script>

<script setup>
const { getItems } = useDirectusItems()

const blog = await getItems({ collection: "blog" });
</script>