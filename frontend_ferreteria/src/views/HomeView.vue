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
                <img src="@/assets/images/imagen.jpg" class="d-block w-100" alt="PRODUCTOS DE PRIMERA CALIDAD">
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
              <h2>EN NUESTRA TIENDA ENCUENTRAS LO QUE BUSCAS</h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="left-content">
              <h4>TENEMOS TODO TIPO DE ARTÍCULOS</h4>
              <p><a rel="nofollow" href="" target="_parent"></a>
                Tenemos artículos acorde a sus necesidades. <a rel="nofollow"
                  href="/contacto">Ubicación y contacto</a> de la tienda.</p>
              <ul class="featured-list">
                <li><a >Te ofrecemos el mejor servicio.</a></li>
                <li><a >Productos al alcance de su bolsillo.</a></li>
                <li><a >Productos de marcas reconocidas.</a></li>
                <li><a >Calidad y garantia.</a></li>
                <li><a >Buenos Precios.</a></li>
              </ul>
              <a href="/productos" class="btn btn-success">Ver más Productos</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="right-image">
              <img src="@/assets/images/Acero.jpg" alt="">
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
                  <h4>Amabilidad &amp; Puntualidad en <em>Industrias FERROTODO</em></h4>
                  <p>Donde la atención al cliente es nuestra prioridad.
                  </p>
                </div>
                <div class="col-md-4">
                  <a href="#" class="filled-button">Ir Inicio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>
