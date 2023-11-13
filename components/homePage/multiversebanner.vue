<template>
  <div>
    <v-toolbar title="POSTS FROM ACROSS THE MULTIVERSE" density="comfortable" color="transparent"></v-toolbar>
    <v-carousel v-for="blog in data.BlogItems.items" :key="blog.id">
      <v-carousel-item :src="`${blog.content.image.filename}`" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data(){
      return {}
  }
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
/*const { getItems } = useDirectusItems()

const blog = await getItems({ collection: "blog" });*/
</script>