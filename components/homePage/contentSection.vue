<template>
  <div>
    <v-row>
      <v-col cols="3" v-for="categories in categories" :key="categories">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="350" :src="`${categories.content.image.filename}`" cover />

          <v-card-subtitle class="pt-4">
            {{ categories.name }}
          </v-card-subtitle>

          <v-card-title>{{ categories.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="categories.name">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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

const categories = await getItems({ collection: "categories", params: { limit: 4 }});
</script>