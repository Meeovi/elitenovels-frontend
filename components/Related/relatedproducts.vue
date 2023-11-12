<template>
    <div>
      <v-col cols="12">
        <v-toolbar title="NEW & TRENDING PRODUCTS FROM ELITENOVELS SHOP" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card color="white" :class="['ma-4', selectedClass]" height="350" width="250" @click="toggle">
                <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover></v-img>
  <v-card-title>Top 10 Australian beaches</v-card-title>
  
                <v-card-subtitle class="pt-4">
                  $ 59 
                </v-card-subtitle>
  
                <v-card-actions>
                  <v-btn color="blue" href="https://www.meeovi.com/stores/elitenovels/products/">
                    Buy Now
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
    }),
  }
</script>
  
  <style>
  
  </style>