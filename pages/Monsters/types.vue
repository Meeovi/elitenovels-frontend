<template>
    <div class="categoryPage">
      <monsterbar />
      <v-row style="background-color: powderblue;">
        <v-col cols="12">
          <h1 class="characterHeader">Types</h1>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="3" v-for="types in types" :key="types">
          <v-card class="mx-auto" max-width="300">
            <img class="align-end text-white" height="450" :src="`${url}/assets/${types.image}`" cover />
  
            <v-card-subtitle class="pt-4">
              {{ types.categories }}
            </v-card-subtitle>
  
            <v-card-title>{{ types.name }}</v-card-title>
  
            <v-card-actions>
              <v-btn color="blue" variant="outlined" :href="`/types/${types.id}`">
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
    import monsterbar from '../../components/Menus/monsterbar.vue'
  
    export default {
      components: {
        monsterbar,
      },
      data: () => ({
        model: null,
        url: 'http://meeovicms.com:8007'
      }),
    }
  </script>
  
  <script setup>
  const { getItems } = useDirectusItems()
  
  const types = await getItems({ collection: "types", limit: 20 });
  
    useHead({
      title: 'Types',
    })
  </script>