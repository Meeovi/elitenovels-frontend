<template>
  <div>
    <NuxtLink :to="`/characters/${character?.slug}`">
      <div class="card-wrap item-wrapper">
        <div class="image-wrap">
          <img v-if="character?.image?.filename_disk" :src="`${$directus.url}assets/${character?.image?.filename_disk}`"
            :alt="character?.name" />
          <img v-else src="assets/images/coming_soon.png" :alt="character?.name">
        </div>
        <div class="content-wrap">
          <h5 class="mbr-section-title card-title mbr-fonts-style mb-0 display-5" style="color: brown;">
            <strong>{{ character?.name }}</strong>
          </h5>
          <h6 class="mbr-role mbr-fonts-style mb-0 display-4">
            {{ character?.alias }}
          </h6>
        </div>
      </div>
    </NuxtLink>
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