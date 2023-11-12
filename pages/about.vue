<template>
  <div>
    <div class="container my-5 py-5">

      <section class="">

        <div class="row gx-0" v-for="about in about" :key="about.id">
          <div class="col-lg-5 mb-4 mb-md-0">
            <div class="d-flex py-md-5">
              <img :src="`${about.content.image.filename}`" class="w-100 rounded-5 shadow-3-strong"
                id="cta-img-nml-50" style="z-index: 10" :alt="about.name" />
            </div>
          </div>

          <div class="col-lg-7 mb-4 mb-md-0">
            <div class="bg-warning h-100 rounded-6 p-4 ps-lg-5 text-black d-flex align-items-center">
              <div class="ps-lg-5">
                <h2 class="fw-bold mb-4">{{ about.name }}</h2>
                <p class="">
                  {{ about.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    <v-row>
      <v-col cols="12">
        <v-toolbar title="CHARACTERS FROM ACROSS THE ELITEVERSE" density="comfortable" color="transparent"></v-toolbar>
      </v-col>
      <v-col cols="12">
        <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="characters in characters" :key="characters" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="300" @click="toggle">
              <img class="align-end text-white" height="400" :src="`${characters.content.image.filename}`"
                cover />

              <v-card-subtitle class="pt-4">
                Published: {{ characters.created_at }}
              </v-card-subtitle>

              <v-card-title>{{ characters.name }}</v-card-title>

              <v-card-actions>
                <v-btn color="blue" :href="`/characters/${characters.id}`">
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
    </v-row>
  </div>
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

const about = await getItems({ collection: "about"});
const characters = await getItems({ collection: "characters", params: { limit: 6 }});

    useHead({
        title: 'About Elite Novels',
    })
</script>

<style>
  @media (min-width: 992px) {
    #cta-img-nml-50 {
      margin-left: 50px;
    }
  }

</style>
