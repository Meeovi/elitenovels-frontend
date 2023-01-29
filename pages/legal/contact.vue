<template>
  <div>
    <!-- Container for demo purpose -->
    <div class="container my-5 py-5 shadow-5">

      <!--Section: Design Block-->
      <section class="text-center">

        <h3 class="mb-5">Contact us</h3>

        <p class="mb-5 mx-auto w-responsive">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laborum animi doloremque
          nam dicta veniam dolor ea nostrum excepturi laboriosam molestiae, expedita odit id! Sunt
          quia cumque consequatur perferendis hic.
        </p>

        <form>
          <div class="row">
            <div class="col-md-9">
              <div class="row mb-4">
                <div class="col-md-6 mb-4 mb-md-0">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="email" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Email Address</label>
                  </div>
                </div>
              </div>
              <div class="form-outline mb-4">
                <input type="text" id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">Subject</label>
              </div>
              <div class="form-outline mb-4">
                <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                <label class="form-label" for="form4Example3">Message</label>
              </div>
              <div class="text-center text-md-start">
                <button type="submit" class="btn btn-primary mb-5 mb-md-0">
                  Send
                </button>
              </div>
            </div>
            <div class="col-md-3">
              <ul class="list-unstyled">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x text-primary"></i>
                  <p>New York, NY 10012, USA</p>
                </li>
                <li>
                  <i class="fas fa-phone fa-2x text-primary"></i>
                  <p>+ 01 234 567 89</p>
                </li>
                <li>
                  <i class="fas fa-envelope fa-2x text-primary"></i>
                  <p>contact@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </form>

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
        title: 'Contact Us',
    })
</script>