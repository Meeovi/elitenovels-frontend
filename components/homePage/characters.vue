<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar title="POPULAR CHARACTERS" density="comfortable" color="transparent"></v-toolbar>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card color="white" :class="['ma-4', selectedClass]" height="370" width="250" @click="toggle">
                <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover></v-img>
                <v-card-title>Character Name</v-card-title>

                <v-card-subtitle class="pt-4">
                  Species:
                </v-card-subtitle>

                <v-card-subtitle class="pt-4">
                  Story:
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn color="blue">
                    Check them out
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
            <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card color="white" :class="['ma-4', selectedClass]" height="370" width="250" @click="toggle">
                <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover></v-img>
                <v-card-title>Monster Name</v-card-title>

                <v-card-subtitle class="pt-4">
                  Type:
                </v-card-subtitle>

                <v-card-subtitle class="pt-4">
                  Level:
                </v-card-subtitle>

                <v-card-actions>
                  <v-btn color="blue">
                    Check them out
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
            <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
              <v-card color="white" :class="['ma-4', selectedClass]" height="350" width="250" @click="toggle">
                <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover></v-img>

                <v-card-subtitle class="pt-4">
                  Story:
                </v-card-subtitle>

                <v-card-title>Character Name</v-card-title>

                <v-card-actions>
                  <v-btn color="blue">
                    Check them out
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
    }),
  }
</script>

<style>

</style>