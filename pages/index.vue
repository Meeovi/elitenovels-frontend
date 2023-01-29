<template>
  <div>
    <intro />
    <contentSection />
    <characters />
    <storySection />
    <videoSection />
    <statsbar />
  </div>
</template>

<script>
import intro from '~/components/homePage/intro.vue'
import contentSection from '~/components/homePage/contentSection.vue'
import storySection from '~/components/homePage/storySection.vue'
import videoSection from '~/components/homePage/videoSection.vue'
import characters from '~/components/homePage/characters.vue'
import statsbar from '~/components/homePage/statsbar.vue'

export default {
  components: {intro, contentSection, characters, storySection, videoSection, statsbar},
  name: 'IndexPage'
}
</script>

<script setup>
    useHead({
        title: 'Elite Novels',
    })
</script>