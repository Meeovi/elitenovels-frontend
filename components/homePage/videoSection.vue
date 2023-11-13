<template>
  <div>
    <v-col cols="12">
      <v-toolbar title="LATEST VIDEOS FROM ELITE NOVELS" density="comfortable" color="transparent"></v-toolbar>
      <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="videos in data.VideoItems.items" :key="videos.id" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="350" width="250" @click="toggle">
              <video :src="`${videos.content.video.filename}`" controls height="250" width="350"></video>
              <v-card-title>{{ videos.name }}</v-card-title>

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
  VideoItems {
    items {
      id
      content {
        name
        video {
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

const videos = await getItems({ collection: "videos", limit: 6 });*/
</script>