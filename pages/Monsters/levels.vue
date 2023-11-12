<template>
    <div class="categoryPage">
      <monsterbar />
      <v-row style="background-color: sienna;">
        <v-col cols="12">
          <h1 class="characterHeader">Levels</h1>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="3" v-for="levels in data.LevelItems.items" :key="levels">
        <v-card class="mx-auto" max-width="300">

          <v-card-title>{{ levels.content.name }}</v-card-title>

          <v-card-text>
            <div v-html="levels.content.description"></div>
          </v-card-text>
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
  LevelItems (sort_by: "level"){
    items {
      id
      content {
        name
        description
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
      title: 'Monster Levels',
    })
  </script>