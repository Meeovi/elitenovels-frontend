<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Menu
        </v-btn>
      </template>
      
      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start><v-img src="images/elogo.png"></v-img></v-icon>Elite Novels
        </a></v-app-bar-title>

      <v-text-field class="mainSearch" density="compact" variant="solo" label="Search" append-inner-icon="fas fa-search" single-line
        hide-details @click:append-inner="onClick"></v-text-field>
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>
      <!--  <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-bell"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="" value="" href="/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="All Notifications" value="notifications" href="/admin/user/notifications">
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="My Account" value="my account" href="/admin/user/"></v-list-item>
              <v-list-item title="Logout" value="logout" href="/logout"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>-->
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <v-list-item prepend-avatar="/images/elogo.png" title="Browse Eliteverse" nav>
              <template v-slot:append>
                <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item prepend-icon="fas fa-home" title="Home" value="home" href="/"></v-list-item>
              <v-list-item title="Characters" value="Characters" href="/Admin/Characters/"></v-list-item>
              <v-list-item title="Monsters" value="Monsters" href="/Admin/Monsters/"></v-list-item>
              <v-list-item title="Mythology" value="Mythology" href="/Admin/Mythology/"></v-list-item>
              <v-list-item title="Stories" value="Stories" href="/Admin/Stories/"></v-list-item>
              <v-list-item title="Videos" value="Videos" href="/Admin/Videos/"></v-list-item>
              <v-list-item title="Blog" value="Blog" href="/Admin/Blog/"></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <slot />
          </main>
        </v-layout>
      </v-card>
      <FooterNav />
    </v-main>
  </v-app>
</template>

<script>
import search from '../components/Search/search.vue'

  export default {
    data() {
      return {
        components: { search },
        drawer: null,
        location: 'bottom',
        items: [{
            title: 'Home',
            icon: 'fas fa-home'
          },
          {
            title: 'Content Manager',
            icon: 'fas fa-feather-pointed'
          },
          {
            title: 'Settings',
            icon: 'fas fa-gear'
          },
        ],
        rail: true,
        loaded: false,
        loading: false,
      }
    },

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

  const theme = ref('light')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };

</script>