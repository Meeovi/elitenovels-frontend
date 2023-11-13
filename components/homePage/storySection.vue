<template>
  <div>
    <v-col cols="12">
      <v-toolbar title="READ STORIES FROM ACROSS THE ELITEVERSE" density="comfortable" color="transparent"></v-toolbar>
      <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item  v-for="stories in data.StoriesItems.items" :key="stories.id" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="250" @click="toggle">
              <img class="align-end text-white" height="400" :src="`${stories.content.image.filename}`" cover />

              <v-card-subtitle class="pt-4">
                Published: {{ stories.content.created_at }}
              </v-card-subtitle>

              <v-card-title>{{ stories.content.name }}</v-card-title>

              <v-card-actions>
                <v-btn color="blue" :href="`/stories/${stories.id}`">
                  Read
                </v-btn>
              </v-card-actions>
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<script setup>
  const query = gql `
  query {
  StoriesItems(sort_by: "name") {
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

const stories = await getItems({ collection: "stories", limit: 6 });*/
</script>