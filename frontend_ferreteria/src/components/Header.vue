<script setup lang="ts">
import { useRoute } from "vue-router";
const location = useRoute();
import { useAuthStore } from "@/stores/index";
const authStore = useAuthStore();
</script>

<template>
    <header class="">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <h2>Ferreteria <em>Sucre</em></h2>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="/">Inicio<span class="sr-only">(current)</span>
                            </a>
                        </li>

                        <!--<li class="nav-item">
                            <a class="nav-link" href="">
                        <li class="breadcrumb-item">
                            <RouterLink to="/productovista"></RouterLink>Productos
                        </li>
                        </a>
                        </li>  -->

                        <li class="nav-item">
                            <a class="nav-link" href="/productos">Productos</a>
                        </li>




                        <!--<a class="nav-link">
                            <RouterLink to="/contacto"> Contacto</RouterLink>
                        </a>-->

                        <li class="nav-item">
                            <a class="nav-link" href="/contacto">Contacto</a>
                        </li>

                        <li class="nav-item">
                            <a v-if="!authStore.token" class="nav-link" href="/login">Iniciar Sesion</a>
                            <a v-else @click="authStore.logout()" class="nav-link">Cerrar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>



