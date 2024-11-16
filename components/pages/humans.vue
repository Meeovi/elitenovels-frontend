<template>
  <div class="categoryPage">
    <characterbar />
    <v-row style="background-color: powderblue;">
      <v-col cols="12">
        <h1 class="characterHeader">Humans</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-toolbar title="BROWSE CHARACTERS" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="3" v-for="characters in data.CharacterItems.items" :key="characters">
        <v-card class="mx-auto" max-width="300">
          <img class="align-end text-white" height="350" :src="`${characters.content.image.filename}`" cover />

          <v-card-subtitle class="pt-4">
            {{ characters.content.affiliates.name }}
          </v-card-subtitle>

          <v-card-title>{{ characters.content.name }}</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined" :href="`/characters/${characters.id}`">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <relatedstories />
    </v-row>
    <latestproducts />
  </div>
</template>

<script>
  import characterbar from '../../components/Menus/characterbar.vue'
  import latestproducts from '../../components/Related/relatedproducts.vue'
  import relatedstories from '../../components/Related/relatedstories.vue'

  export default {
    components: {
      characterbar,
      latestproducts,
      relatedstories
    },
    data: () => ({
      model: null,
    }),
  }
</script>

<script setup>
  const query = gql `
  query {
  CharacterItems (with_tag: "Human"){
    items {
      id
      content {
        name
        age
        alias
        affiliates {
          name
        }
        abilities
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

  const teams = await getItems({ collection: "teams", params: { limit: 6 }});
  const stories = await getItems({ collection: "stories", params: { limit: 6 }});
  const popularcharacters = await getItems({ collection: "characters", params: { limit: 6, filter: {name: "popular"}} });
  const characters = await getItems({ collection: "characters", params: { limit: 20 }}); */

  useHead({
    title: 'Aliens',
  })
</script>