<template>
    <div class="categoryPage">
      <monsterbar />
      <v-row style="background-color: sienna;">
        <v-col cols="12">
          <h1 class="characterHeader">Types</h1>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="3" v-for="types in data.TypeItems.items" :key="types">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="350" :src="`${types.content.image.filename}`" cover />

          <v-card-title>{{ types.content.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="`/monsters/${types.id}`">
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
      }),
    }
  </script>
  
  <script setup>
  const query = gql `
    query {
  TypeItems(sort_by: "name"){
    items {
      id
      content {
        name
        description
        image {
          filename
        }
      }
    }
  }
}
  `
  
    const {
      data
    } = await useAsyncQuery(query)
  
  /*const { getItems } = useDirectusItems()
  
  const characters = await getItems({ collection: "characters", params: {filter: {categories: {categories_id: {id: {_eq: 11}}}}, limit: 25 }});
  const stories = await getItems({ collection: "stories", params: { limit: 6 }});
  const popularmonsters = await getItems({ collection: "monsters", params: { limit: 6, filter: {tags: {_eq: "popular"}}}});
  const monsters = await getItems({ collection: "monsters", params: { limit: 6 }});*/
  
    useHead({
      title: 'Monster Types',
    })
  </script>