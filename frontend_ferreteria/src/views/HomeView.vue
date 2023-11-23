<script setup lang="ts">
</script>

<template>

  <!-- Corousel -->
  <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/images/slide_02.jpg" class="d-block w-100" alt="PRODUCTOS DE PRIMERA CALIDAD">
                <div class="carousel-caption d-none d-md-block">
                    <h5>PRODUCTOS DE PRIMERA CALIDAD</h5>
                    <p></p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/slide_01.jpg" class="d-block w-100" alt="SIEMPRE INNOVANDO">
                <div class="carousel-caption d-none d-md-block">
                    <h5>SIEMPRE INNOVANDO</h5>
                    <p></p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/slide_02.jpg" class="d-block w-100" alt="TENEMOS TODO LO QUE BUSCAS">
                <div class="carousel-caption d-none d-md-block">
                    <h5>TENEMOS TODO LO QUE BUSCAS</h5>
                    <p></p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/slide_03.jpg" class="d-block w-100" alt="LA MEJOR ATENCION AL CLIENTE">
                <div class="carousel-caption d-none d-md-block">
                    <h5>LA MEJOR ATENCION AL CLIENTE</h5>
                    <p></p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <!-- Fin Corousel -->

  <!-- Banner Ends Here -->
  <nav>





    <div class="best-features">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>About Sixteen Clothing</h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="left-content">
              <h4>Looking for the best products?</h4>
              <p><a rel="nofollow" href="https://templatemo.com/tm-546-sixteen-clothing" target="_parent">This
                  template</a>
                is free to use for your business websites. However, you have no permission to redistribute the
                downloadable
                ZIP file on any template collection website. <a rel="nofollow"
                  href="https://templatemo.com/contact">Contact
                  us</a> for more info.</p>
              <ul class="featured-list">
                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                <li><a href="#">Consectetur an adipisicing elit</a></li>
                <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                <li><a href="#">Corporis, omnis doloremque</a></li>
                <li><a href="#">Non cum id reprehenderit</a></li>
              </ul>
              <a href="about.html" class="filled-button">Read More</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="right-image">
              <img src="@/assets/images/feature-image.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="call-to-action">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="inner-content">
              <div class="row">
                <div class="col-md-8">
                  <h4>Creative &amp; Unique <em>Sixteen</em> Products</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.
                  </p>
                </div>
                <div class="col-md-4">
                  <a href="#" class="filled-button">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>
