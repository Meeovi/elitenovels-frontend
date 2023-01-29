<template>
  <div>
    <!-- Carousel wrapper -->
    <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"
          aria-label="Slide 3"></button>
      </div>

      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100"
            alt="Sunset Over the City" />
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100"
            alt="Canyon at Nigh" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100"
            alt="Cliff Above a Stormy Sea" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <!-- Inner -->

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- Carousel wrapper -->
    <!-- Container for demo purpose -->
    <div class="container-fluid my-5 py-5">

      <!--Section: Design Block-->
      <section>

        <h3 class="text-center">Popular Characters</h3>

        <p class="text-center font-weight-bold small text-uppercase mb-4 pb-2">All about my passion</p>

        <p class="text-center mb-5 mx-auto w-responsive">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laborum animi doloremque
          nam dicta veniam dolor ea nostrum excepturi laboriosam molestiae, expedita odit id! Sunt
          quia cumque consequatur perferendis hic.
        </p>

        <div class="lightbox">
          <div class="row">
            <div class="col-lg-3 mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(135).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(135).jpg"
                alt="Lightbox image 1" class="w-100 shadow-1-strong rounded" />
              <p class="text-uppercase font-weight-bold mt-4">| Lorem ipsum dolor sit amet</p>
            </div>
            <div class="col-lg-3 mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(128).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(128).jpg"
                alt="Lightbox image 2" class="w-100 shadow-1-strong rounded" />
              <p class="text-uppercase font-weight-bold mt-4">| Lorem ipsum dolor sit amet</p>
            </div>
            <div class="col-lg-3 mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(133).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(133).jpg"
                alt="Lightbox image 3" class="w-100 shadow-1-strong rounded" />
              <p class="text-uppercase font-weight-bold mt-4">| Lorem ipsum dolor sit amet</p>
            </div>
            <div class="col-lg-3 mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg"
                alt="Lightbox image 3" class="w-100 shadow-1-strong rounded" />
              <p class="text-uppercase font-weight-bold mt-4">| Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg"
                alt="Lightbox image 3" class="w-100 shadow-1-strong rounded" />
              <p class="text-uppercase font-weight-bold mt-4">| Lorem ipsum dolor sit amet</p>
            </div>
            <div class="col-lg-3 mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg"
                alt="Lightbox image 1" class="w-100 shadow-1-strong rounded" />
              <p class="text-uppercase font-weight-bold mt-4">| Lorem ipsum dolor sit amet</p>
            </div>
            <div class="col-lg-3 mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(134).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(134).jpg"
                alt="Lightbox image 2" class="w-100 shadow-1-strong rounded" />
              <p class="text-uppercase font-weight-bold mt-4">| Lorem ipsum dolor sit amet</p>
            </div>
            <div class="col-lg-3">
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg" alt="Lightbox image 3"
                class="w-100 shadow-1-strong rounded" />
              <p class="text-uppercase font-weight-bold mt-4">| Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

      </section>
      <!--Section: Design Block-->

    </div>
    <!-- Container for demo purpose -->
    <!-- Container for demo purpose -->
    <div class="container-fluid my-5">

      <!--Section: Design Block-->
      <section id="wedding">

        <h3 class="text-center mb-5">Mythology Gallery</h3>

        <div class="lightbox">
          <div class="row">
            <div class="col-md-4">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(129).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(129).jpg"
                alt="Lightbox image 1" class="w-100 shadow-1-strong rounded mb-4" />
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(82).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(82).jpg"
                alt="Lightbox image 2" class="w-100 shadow-1-strong rounded mb-4 mb-md-0" />
            </div>
            <div class="col-md-4">
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(84).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(84).jpg"
                alt="Lightbox image 3" class="w-100 shadow-1-strong rounded mb-4" />
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/4-col/img%20(131).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/People/4-col/img%20(131).jpg"
                alt="Lightbox image 4" class="w-100 shadow-1-strong rounded mb-4 mb-md-0" />
            </div>
            <div class="col-md-4">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(126).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/People/12-col/img%20(126).jpg"
                alt="Lightbox image 5" class="w-100 shadow-1-strong rounded mb-4" />
              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(85).jpg"
                data-mdb-img="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(85).jpg"
                alt="Lightbox image 6" class="w-100 shadow-1-strong rounded" />
            </div>
          </div>
        </div>

      </section>
      <!--Section: Design Block-->

    </div>
    <!-- Container for demo purpose -->
    <!-- Container for demo purpose -->
    <div class="container my-5 p-5">

      <!--Section: Design Block-->
      <section class="text-center">

        <h3 class="mb-5">Mythology Stories</h3>

        <p class="mb-5 mx-auto w-responsive">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laborum animi doloremque
          nam dicta veniam dolor ea nostrum excepturi laboriosam molestiae, expedita odit id! Sunt
          quia cumque consequatur perferendis hic.
        </p>

        <div class="row">
          <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <div class="bg-image hover-overlay hover-zoom ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="text-primary mt-2 mb-3"><i class="fas fa-utensils"></i> Lunches</h5>
                <h5 class="mb-3">This is title of the news</h5>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi.</p>
                <button class="btn btn-primary btn-sm mb-2">Book a room</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="bg-image hover-overlay hover-zoom ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="text-primary mt-2 mb-3"><i class="fas fa-birthday-cake"></i> Dessert</h5>
                <h5 class="mb-3">This is title of the news</h5>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi.</p>
                <button class="btn btn-primary btn-sm mb-2">Book a room</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-0">
            <div class="card">
              <div class="bg-image hover-overlay hover-zoom ripple" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="text-primary mt-2 mb-3"><i class="fas fa-glass-martini"></i> Drinks</h5>
                <h5 class="mb-3">This is title of the news</h5>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi.</p>
                <button class="btn btn-primary btn-sm mb-2">Book a room</button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <!--Section: Design Block-->

    </div>
    <!-- Container for demo purpose -->
  </div>
</template>

<script>
  export default {

  }

</script>

<script setup>
    useHead({
        title: 'Mythology',
    })
</script>

<style>

</style>
