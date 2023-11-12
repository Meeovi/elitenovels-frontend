<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar dark prominent :image="`${character.content.image.filename}`">
          <v-toolbar-title>{{ character.name }}</v-toolbar-title>
        </v-toolbar>
      </v-col>

      <v-col cols="8">
        <v-card class="mx-auto" :text="character.description" variant="outlined"></v-card>
      </v-col>

      <v-col cols="4">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" width="400" variant="outlined">
              <img class="align-end text-white" height="300" :src="`${character.content.image.filename}`" cover />

              <v-card-subtitle class="pt-4">
                {{ character.categories }}
              </v-card-subtitle>

              <v-card-text>
                <div>Name: {{ character.name }}</div>
                <v-spacer></v-spacer>
                
                <div>Alias: {{ character.alias }}</div>
                <v-spacer></v-spacer>

                <div>Abilities: {{ character.abilities }}</div>
                <v-spacer></v-spacer>

                <div>Affiliates: {{ character.affiliates }}</div>
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
const { getItemById } = useDirectusItems();

const character = await getItemById({ collection: "characters", id: 1 });

  useHead({
    title: character.name,
  })
</script>