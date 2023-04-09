<template>
  <div>
    <v-row>
      <v-col cols="3" v-for="n in 4" :key="n">
        <v-card class="mx-auto" max-width="300">
          <v-img class="align-end text-white" height="350" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-img>

          <v-card-subtitle class="pt-4">
            Number 10
          </v-card-subtitle>

          <v-card-title>Top 10 Australian beaches</v-card-title>

          <v-card-actions>
            <v-btn color="blue" variant="outlined">
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {


  }
</script>

<script setup>

</script>