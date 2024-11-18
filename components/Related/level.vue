<template>
  <div>
    <a :href="`/characters/level/${level?.id}`">
      <v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200" @click="toggle">
        <div v-if="level?.image?.filename_disk">
          <img class="align-end text-white" height="250" :src="`${$directus.url}/assets/${level?.image?.filename_disk}`" :alt="level?.name"
            cover />
        </div>

        <div v-else>
          <img class="align-end text-white" height="300" src="~/assets/images/coming_soon.png" cover />
        </div>
        <v-card-title class="pt-4">{{ level?.name }}</v-card-title>
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
    level: {
      type: Object,
      required: true,
    },
  });
  const {
    level
  } = props;
</script>