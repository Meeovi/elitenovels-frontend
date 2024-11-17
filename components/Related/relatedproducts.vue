<template>
  <div>
    <v-toolbar title="NEW & TRENDING PRODUCTS FROM ELITENOVELS SHOP" density="comfortable" color="transparent">
      <a href="https://www.meeovi.com/outlets/ODU=">More from Our Meeovi Shop</a>
    </v-toolbar>
    <v-sheet class="mx-auto">
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
          v-for="(products, index) in result?.products?.items" :key="index">
          <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />

          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
            </v-scale-transition>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script setup>
  import productCard from '~/components/related/productCard.vue'
  import {
    ref
  } from 'vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import products from '~/graphql/queries/products'

  const model = ref(null);
  const {
    result
  } = useQuery(products)
</script>