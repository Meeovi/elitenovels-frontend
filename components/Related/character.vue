<template>
  <div>
    <a :href="`/characters/${character?.id}`">
      <div class="card-wrap item-wrapper">
        <div class="image-wrap">
          <img v-if="char?.image?.filename_disk" :src="`${$directus.url}assets/${char?.image?.filename_disk}`"
            :alt="char?.name" />
        </div>
        <div class="content-wrap">
          <h5 class="mbr-section-title card-title mbr-fonts-style mb-0 display-5">
            <strong>{{ char?.name }}</strong>
          </h5>
          <h6 class="mbr-role mbr-fonts-style mb-0 display-4">
            {{ char?.alias }}
          </h6>
        </div>
      </div>
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