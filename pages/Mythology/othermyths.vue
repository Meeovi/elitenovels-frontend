<template>
    <div class="categoryPage">
      <mythologybar />
      <v-row style="background-color: lightgreen;">
        <v-col cols="12">
          <h1 class="characterHeader">Other Myths</h1>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="3" v-for="othermyth in data.CharacterItems.items" :key="othermyth">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="350" :src="`${othermyth.content.image.filename}`" cover />

          <v-card-title>{{ othermyth.content.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="`/mythology/${othermyth.id}`">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
    import mythologybar from '../../components/Menus/mythologybar.vue'
  
    export default {
      components: {
        mythologybar,
      },
      data: () => ({
        model: null,
      }),
    }
  </script>
  
  <script setup>
  const query = gql `
  query {
  CharacterItems (with_tag:"OtherMyths"){
    items {
      id
      content {
        name
        alias
        affiliates {
          name
        }
        category {
          name
        }
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
      title: 'Other Myths',
    })
  </script>