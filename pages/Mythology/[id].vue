<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar dark prominent :image="`${mythology.content.image.filename}`">
          <v-toolbar-title>{{ mythology.name }}</v-toolbar-title>
        </v-toolbar>
      </v-col>

      <v-col cols="8">
        <v-card class="mx-auto" :text="mythology.description" variant="outlined"></v-card>
      </v-col>

      <v-col cols="4">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" width="400" variant="outlined">
              <img class="align-end text-white" height="300" :src="`${mythology.content.image.filename}`" cover />

              <v-card-subtitle class="pt-4">
                {{ mythology.categories }}
              </v-card-subtitle>

              <v-card-text>
                <div>Name: {{ mythology.name }}</div>
                <v-spacer></v-spacer>

                <div>Alias: {{ mythology.alias }}</div>

                <div>Affiliates: {{ mythology.affiliates }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      url: 'http://meeovicms.com:8007'
    }),
  }
</script>

<script setup>
  const {
    getItemById
  } = useDirectusItems();

  const mythology = await getItemById({
    collection: "mythology",
    id: 1
  });

  useHead({
    title: mythology.name,
  })
</script>