<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar dark prominent image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <v-toolbar-title>Vuetify</v-toolbar-title>
        </v-toolbar>
      </v-col>

      <v-col cols="8">
        <p></p>
      </v-col>

      <v-col cols="4">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="400">
              <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover>
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                Number 10
              </v-card-subtitle>

              <v-card-text>
                <div>Name: </div>

                <div>Alias: </div>

                <div>Abilities: </div>

                <div>Affiliates: </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {}
</script>

<script setup>
  useHead({
    title: '',
  })
</script>