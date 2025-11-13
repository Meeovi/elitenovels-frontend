<template>
  <v-app :theme="theme.global.name.value">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon><div class="menutext"> Browse the Eliteverse</div>
        </v-btn>
      </template>

      <!--<v-app-bar-title><a class="logobrand" href="https://kids.elitenovels.com">Elite Kids</a></v-app-bar-title>-->
      <v-divider class="border-opacity-100" inset vertical color="success"></v-divider>
      
      <v-spacer></v-spacer>

      <logo />
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height rightNav">
        <ecosystemmenu />
        <v-divider class="border-opacity-100" inset vertical color="primary"></v-divider>
        <v-col>
          <search />
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <div class="drawer-content">
              <v-list nav>

                <!---->
                <sidebar />
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="3">
                    <v-btn variant="text" stacked title="Help Center" prepend-icon="fas fa-question-circle" size="medium"
                      href="https://help.meeovi.com"></v-btn>
                  </v-col>
                  <v-col cols="3">
                    <v-btn @click="toggleDark()" variant="text" size="medium">
                      <v-icon>
                        {{ isDark ? 'fas fa-moon' : 'fas fa-sun' }}
                      </v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="3">
                    <!--<logout />-->
                  </v-col>
                </v-row>
              </v-list>
            </div>
          </v-navigation-drawer>

          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <!--<lowerbar />-->
            <slot />

            <!--<relatedproducts />-->
          </main>
        </v-layout>
      </v-card>

      <BottomFooter />
      <FooterNav />
    </v-main>
  </v-app>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    useDark,
    useToggle
  } from '@vueuse/core'
  import {
    useTheme
  } from 'vuetify'
  import ecosystemmenu from '~/components/menus/ecosystemmenu.vue'
  import sidebar from '~/components/menus/sidebar.vue'
  import search from '~/components/search/search.vue'
  //import lowerbar from '~/components/menus/lowerbar.vue'
  import FooterNav from '~/components/menus/FooterNav.vue'
  import BottomFooter from '~/components/menus/BottomFooter.vue'
  //import relatedproducts from '~/components/related/relatedproducts.vue'
  import logo from '~/components/blocks/logo.vue'

  const drawer = ref(null);

  const theme = useTheme()
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  // Sync Vuetify theme with dark mode
  watch(isDark, (dark) => {
    theme.value = dark ? 'dark' : 'light'
  }, {
    immediate: true
  })


  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };
</script>