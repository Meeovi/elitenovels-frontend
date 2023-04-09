<template>
    <div>
        <monsterbar />
        <v-row>
            <v-col cols="12">
                <v-toolbar title="MONSTER TYPES" density="comfortable" color="transparent"></v-toolbar>
            </v-col>
            <v-col cols="3" v-for="n in 4" :key="n">
                <v-card class="mx-auto" max-width="300" max-height="370">
                    <v-img class="align-end text-white"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                    </v-img>

                    <v-card-title>Type Name</v-card-title>

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
  import monsterbar from '../../components/Menus/monsterbar.vue'

  export default {
    components: {
      monsterbar,
    },
    data: () => ({
      model: null,
    }),
  }
</script>

<script setup>
    useHead({
        title: 'Monster Types',
    })
</script>