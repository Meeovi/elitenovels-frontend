<template>
  <div class="categoryPage">
    <characterbar />
    <v-row style="background-color: powderblue;">
      <v-col cols="12">
        <h1 class="characterHeader">Aliens</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3" v-for="aliens in aliens" :key="aliens">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="450" :src="`${url}/assets/${aliens.image}`" cover />

          <v-card-subtitle class="pt-4">
            {{ aliens.categories }}
          </v-card-subtitle>

          <v-card-title>{{ aliens.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="`/aliens/${aliens.id}`">
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

const aliens = await getItems({ collection: "aliens", limit: 20 });

  useHead({
    title: 'Aliens',
  })
</script>