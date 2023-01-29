<template>
  <div>
    <div class="row">
      <div class="col-lg-8">
        <div class="input-group">
          <div id="search-autocomplete" class="form-outline">
            <input type="search" id="form1" class="form-control" />
            <label class="form-label" for="form1">Search</label>
          </div>
          <button type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="searchresults">
            
        </div>
      </div>
      <div class="col-lg-4">
        <div class="mb-5">
          <div class="bg-image hover-overlay hover-zoom ripple rounded-5 mb-4" data-mdb-ripple-color="light">
            <img class="w-100" src="https://mdbootstrap.com/img/new/blog/2.jpeg"
              style="height: 227px; object-fit: cover;" alt="Image placeholder">
            <a href="#!">
              <div class="mask" style="background-color: rgba(255,255,255,0.1);"></div>
            </a>
          </div>
          <h6 class="text-muted text-uppercase small pb-1"><a href="#!" class="text-reset">Photography</a></h6>
          <h5 class="fw-bold mb-3"><a href="#!" class="text-reset">A collection of aesthetic photographs for
              commercial use for free</a></h5>
        </div>
        <div>
          <div class="bg-image hover-overlay hover-zoom ripple rounded-5 mb-4" data-mdb-ripple-color="light">
            <img class="w-100" src="https://mdbootstrap.com/img/new/blog/3.jpeg"
              style="height: 227px; object-fit: cover;" alt="Image placeholder">
            <a href="#!">
              <div class="mask" style="background-color: rgba(255,255,255,0.1);"></div>
            </a>
          </div>
          <h6 class="text-muted text-uppercase small pb-1"><a href="#!" class="text-reset">Acquiring Skills</a></h6>
          <h5 class="fw-bold mb-3"><a href="#!" class="text-reset">Books every designer should read in 2022</a></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    head: {
      title: 'Search the Eliteverse'
    }
  }

</script>

<style>

</style>
