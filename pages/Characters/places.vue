<template>
  <div class="categoryPage">
    <characterbar />
    <v-row style="background-color: powderblue;">
      <v-col cols="12">
        <h1 class="characterHeader">Places</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3" v-for="places in places" :key="places">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="450" :src="`${url}/assets/${places.image}`" cover />

          <v-card-subtitle class="pt-4">
            {{ places.categories }}
          </v-card-subtitle>

          <v-card-title>{{ places.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="`/places/${places.id}`">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import characterbar from '../../components/Menus/characterbar.vue'

  export default {
    components: {
      characterbar,
    },
    data: () => ({
      model: null,
      url: 'http://meeovicms.com:8007'
    }),
  }
</script>

<script setup>
const { getItems } = useDirectusItems()

const places = await getItems({ collection: "places", limit: 20 });

  useHead({
    title: 'Places',
  })
</script>