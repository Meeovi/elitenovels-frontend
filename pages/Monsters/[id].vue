<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar dark prominent :image="`${monster.content.image.filename}`">
          <v-toolbar-title>{{ monster.name }}</v-toolbar-title>
        </v-toolbar>
      </v-col>

      <v-col cols="8">
        <v-card class="mx-auto" :text="monster.description" variant="outlined"></v-card>
      </v-col>

      <v-col cols="4">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" width="400" variant="outlined">
              <img class="align-end text-white" height="300" :src="`${monster.content.image.filename}`" cover />

              <v-card-subtitle class="pt-4">
                {{ monster.categories }}
              </v-card-subtitle>

              <v-card-text>
                <div>Name: {{ monster.name }}</div>
                <v-spacer></v-spacer>

                <div>Type: {{ monster.type }}</div>

                <div>Level: {{ monster.level }}</div>

                <div>Attacks: {{ monster.abilities }}</div>

                <div>Affiliates: {{ monster.affiliates }}</div>

                <div>Evolutions: {{ monster.evolutions }}</div>
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

  const monster = await getItemById({
    collection: "monsters",
    id: 1
  });

  useHead({
    title: monster.name,
  })
</script>