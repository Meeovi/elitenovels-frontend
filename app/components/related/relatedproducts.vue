<template>
  <div class="contentSection" v-if="result">
    <v-toolbar :title="shopBlock?.name" density="comfortable" color="transparent">
      <NuxtLink :to="shopBlock?.content?.[0]?.subject">{{ shopBlock?.content?.[0]?.name }}</NuxtLink>
    </v-toolbar>
    <v-sheet class="mx-auto">
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ toggle, selectedClass }"
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
  /*import {
    useQuery
  } from '@vue/apollo-composable'
 import products from '~/graphql/queries/products'

  const {
    result
  } = useQuery(products)*/

  const model = ref(null);
      const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: shopBlock
    } = await useAsyncData('shopBlock', () => {
        return $directus.request($readItem('blocks', '7', {
            fields: ['*', {
                '*': ['*']
            }],
        }))
    })
</script>