<template>
  <div>
    <v-col cols="12">
      <v-toolbar title="READ STORIES FROM ACROSS THE ELITEVERSE" density="comfortable" color="transparent"></v-toolbar>
      <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="stories in stories" :key="stories" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="250" @click="toggle">
              <img class="align-end text-white" height="400" :src="`${stories.content.image.filename}`"
                cover />

              <v-card-subtitle class="pt-4">
                Published: {{ stories.created_at }}
              </v-card-subtitle>

              <v-card-title>{{ stories.name }}</v-card-title>

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
      url: 'http://meeovicms.com:8007'
    }),
  }
</script>

<script setup>
const { getItems } = useDirectusItems()

const stories = await getItems({ collection: "stories", limit: 6 });
</script>