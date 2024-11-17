<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <!--<template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>-->

      <v-app-bar-title><a class="logobrand" href="https://kids.elitenovels.com">Elite Kids</a></v-app-bar-title>
      <v-spacer></v-spacer>

      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start>
            <v-img src="images/elogo.png"></v-img>
          </v-icon>Elite Novels
        </a></v-app-bar-title>
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <ecosystemmenu />
        <v-divider class="border-opacity-100" inset vertical color="success"></v-divider>
        <v-col>
          <search />
        </v-col>
        <v-col>
          <v-btn :prepend-icon="theme === 'light' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <lowerbar />
            <slot />
          </main>
        </v-layout>
      </v-card>
      <FooterNav />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>

<script setup>
  import {
    ref
  } from 'vue'
  import ecosystemmenu from '~/components/Menus/ecosystemmenu.vue'
  import search from '~/components/Search/search.vue'
  import lowerbar from '~/components/Menus/lowerbar.vue'

  const theme = ref('light')
  const location = ref('bottom');
  const rail = ref(true);
  const loaded = ref(false);
  const loading = ref(false);
  const drawer = ref(null);

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };
</script>