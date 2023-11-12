<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar title="POPULAR CHARACTERS" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="characters in popularcharacters" :key="characters" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="250" @click="toggle">
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

      <v-col cols="12">
        <v-toolbar title="SPELL CREATURES" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="monsters in monsters" :key="monsters" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="250" @click="toggle">
              <img class="align-end text-white" height="400" :src="`${monsters.content.image.filename}`"
                cover />

              <v-card-subtitle class="pt-4">
                Published: {{ monsters.created_at }}
              </v-card-subtitle>

              <v-card-title>{{ monsters.name }}</v-card-title>

              <v-card-actions>
                <v-btn color="blue" :href="`/monsters/${monsters.id}`">
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

      <v-col cols="12">
        <v-toolbar title="CHARACTERS FROM MYTHOLOGY" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="characters in characters" :key="characters" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card color="white" :class="['ma-4', selectedClass]" height="550" width="250" @click="toggle">
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

const characters = await getItems({ collection: "characters", params: { limit: 6 }});
const monsters = await getItems({ collection: "monsters", params: { limit: 6 }});
const popularcharacters = await getItems({ collection: "characters", params: { limit: 6, filter: {name: "popular"}} });
</script>