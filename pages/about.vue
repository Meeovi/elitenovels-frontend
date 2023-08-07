<template>
  <div>
    <div class="container my-5 py-5">

      <section class="">

        <div class="row gx-0" v-for="about in about" :key="about.id">
          <div class="col-lg-5 mb-4 mb-md-0">
            <div class="d-flex py-md-5">
              <img :src="`${url}/assets/${about.image}`" class="w-100 rounded-5 shadow-3-strong"
                id="cta-img-nml-50" style="z-index: 10" :alt="about.name" />
            </div>
          </div>

          <div class="col-lg-7 mb-4 mb-md-0">
            <div class="bg-warning h-100 rounded-6 p-4 ps-lg-5 text-black d-flex align-items-center">
              <div class="ps-lg-5">
                <h2 class="fw-bold mb-4">{{ about.name }}</h2>
                <p class="">
                  {{ about.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
const { getSingletonItem } = useDirectusItems()

const about = await getSingletonItem({ collection: "about"});

    useHead({
        title: 'About Elite Novels',
    })
</script>

<style>
  @media (min-width: 992px) {
    #cta-img-nml-50 {
      margin-left: 50px;
    }
  }

</style>
