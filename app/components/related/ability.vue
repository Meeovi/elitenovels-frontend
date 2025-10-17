<template>
  <div>
    <a :href="`/characters/ability/${ability?.id}`">
      <v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200" @click="toggle">
        <div v-if="ability?.image?.filename_disk">
          <img class="align-end text-white" height="250" :src="`${$directus.url}/assets/${ability?.image?.filename_disk}`" :alt="ability?.name"
            cover />
        </div>

        <div v-else>
          <img class="align-end text-white" height="300" src="~/assets/images/coming_soon.png" cover />
        </div>
        <v-card-title class="pt-4">{{ ability?.name }}</v-card-title>
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
    ability: {
      type: Object,
      required: true,
    },
  });
  const {
    ability
  } = props;
</script>