<template>
    <div>
        <a :href="`/characters/${character?.slug}`">
            <v-card :color="isSelected ? 'primary' : 'white'" class="ma-4" height="350" width="200" @click="toggle">
                <img class="align-end text-white" height="250" :src="`${character?.image?.filename_disk}`" :alt="character?.name" cover />
                <v-card-title class="pt-4">{{ character?.name }}</v-card-title>
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
    character: {
      type: Object,
      required: true,
    },
  });
  const {
    character
  } = props;
</script>