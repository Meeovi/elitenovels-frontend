<template>
  <div>
    <intro />
    <div class="homePage">
      <!-- <contentSection /> -->
      <characters />
      <storySection />
      <shopSection />
      <videoSection />
    </div>
    <multiversebanner />
  </div>
</template>

<script>
  import intro from '~/components/homePage/intro.vue'
  //import contentSection from '~/components/homePage/contentSection.vue'
  import storySection from '~/components/homePage/storySection.vue'
  import shopSection from '~/components/Related/relatedproducts.vue'
  import videoSection from '~/components/homePage/videoSection.vue'
  import characters from '~/components/homePage/characters.vue'
  import multiversebanner from '~/components/homePage/multiversebanner.vue'

  export default {
    components: {
      intro,
      //contentSection,
      characters,
      storySection,
      shopSection,
      videoSection,
      multiversebanner
    },
    name: 'IndexPage'
  }
</script>

<script setup>
  useHead({
    title: 'Elite Novels',
  })
</script>