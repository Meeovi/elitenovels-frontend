<template>
  <div>
    <a :href="`/characters/type/${type?.id}`">
      <v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200" @click="toggle">
        <div v-if="type?.image?.filename_disk">
          <img class="align-end text-white" height="250" :src="`${$directus.url}/assets/${type?.image?.filename_disk}`" :alt="type?.name"
            cover />
        </div>

        <div v-else>
          <img class="align-end text-white" height="300" src="~/assets/images/coming_soon.png" cover />
        </div>
        <v-card-title class="pt-4">{{ type?.name }}</v-card-title>
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </a>
  </div>
</template>

<script setup>
  const props = defineProps({
    type: {
      type: Object,
      required: true,
    },
  });
  const {
    type
  } = props;
</script>