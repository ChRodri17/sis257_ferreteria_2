<script setup lang="ts">
import type { Producto } from '@/models/producto';
import { ref } from 'vue';

const pr = ref([]);

</script>

<template>
    <div class="find-us">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>VISTA DE PRODUCTOS</h2>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div v-for="p in pr" class="col-md-4">
                <div class="product-item">
                    <a href="#"><img src="@/assets/images/1.-ALAMBRE-DE-PUA.jpg " alt=""></a>
                    <div class="down-content">
                        <a href="/detalle">
                            <h4>p.descripcion</h4>
                        </a>
                        <h6>p.precio</h6>
                        <p>Descripcion.</p>
                        <ul class="stars">
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                        </ul>
                        <span>Reviews (22)</span>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>