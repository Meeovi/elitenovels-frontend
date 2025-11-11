<template>
  <v-card class="mx-auto">
      <v-card-text>
          <div>{{ dictionary?.name }}</div>

          <p class="text-h4 font-weight-black">{{ dictionary?.pronunction }}</p>

          <p v-html="dictionary?.type"></p>

          <div class="text-medium-emphasis">
              "{{ dictionary?.excerpt }}"
          </div>
      </v-card-text>

      <v-card-actions>
          <v-btn color="teal-accent-4" text="Learn More" variant="text" @click="reveal = true"></v-btn>
      </v-card-actions>

      <v-expand-transition>
          <v-card v-if="reveal" class="position-absolute w-100" height="100%" style="bottom: 0;">
              <v-card-text class="pb-0">
                  <p class="text-h4">{{ dictionary?.status }}</p>

                  <p class="text-medium-emphasis" v-html="dictionary?.description"></p>
              </v-card-text>

              <v-card-actions class="pt-0">
                  <v-btn color="teal-accent-4" text="Close" variant="text" @click="reveal = false"></v-btn>
              </v-card-actions>
          </v-card>
      </v-expand-transition>
  </v-card>
</template>

<script setup>
  import {
      ref
  } from 'vue'

  const reveal = ref(false);
  const props = defineProps({
    dictionary: {
      type: Object,
      required: true,
    },
  });
  const {
    dictionary
  } = props;
</script>