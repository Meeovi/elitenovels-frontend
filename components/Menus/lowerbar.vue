<template>
    <v-card>
        <v-tabs bg-color="deep-blue-darken-4" center-active>
            <v-tab><a href="/">Home</a></v-tab>
            <v-tab>
                <v-btn variant="text">
                    Characters
                    <v-menu activator="parent">
                        <v-list>
                            <v-list-item title="Characters" value="Characters" href="/characters/"></v-list-item>
                            <v-list-item title="Monsters" value="Monsters" href="/monsters/"></v-list-item>
                            <v-list-item title="Mythology" value="Mythology" href="/mythology/"></v-list-item>
                            <v-list-item title="Items" value="Items" href="/categories/items"></v-list-item>
                            <v-list-item title="Places" value="Places" href="/categories/places"></v-list-item>
                            <v-list-item title="Dictionary" value="Dictionary" href="/categories/dictionary">
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </v-tab>
            <v-tab><a href="/categories/events">Events</a></v-tab>
            <v-tab><a href="/stories/">Stories</a></v-tab>
            <v-tab><a href="/videos">Videos</a></v-tab>
            <v-tab><a href="/blog">Blog</a></v-tab>
            <v-tab><a href="https://www.meeovi.com/shops/elitenovels/">Shop</a></v-tab>
            <v-tab align-tabs="end"><a href="https://kids.elitenovels.com">Elite Kids</a></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>

<script setup>

</script>