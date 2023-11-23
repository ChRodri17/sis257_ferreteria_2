<script setup lang="ts">

import type { Producto } from '@/models/producto'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import { useAuthStore } from "@/stores/index";
const authStore = useAuthStore();

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var productos = ref<Producto[]>([])

async function getProductos() {
  productos.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/productos/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Producto?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getProductos())
  }
}

onMounted(() => {
  getProductos()
})

</script>



<template>
  <!--INICIA LA TABLA-->
  <div v-if="authStore.token">
  <div class="find-us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Productos</li>
              </ol>
            </nav>
            <h2>LISTA DE PRODUCTOS</h2>
            <div class="col-12">
              <RouterLink to="/productos/crear">Crear Nuevo</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">





    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Codigo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Unidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Existencia Producto</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productos.values()" :key="producto.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ producto.codigo }}</td>
            <td>{{ producto.descripcion }}</td>
            <td>{{ producto.unidad }}</td>
            <td>{{ producto.precio }}</td>
            <td>{{ producto.existenciaProducto }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(producto.id)">Editar</button>
              <button class="btn btn-link" @click="toDelete(producto.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  <!--FIN TABLA-->

  <!--INICIA LA VISTA DE PRODUCTOS CON IMAGENES-->
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
      <div v-for="p in productos" class="col-md-4">
        <div class="product-item">
          <a href="#"><img src="@/assets/images/1.-ALAMBRE-DE-PUA.jpg " alt=""></a>


          <div v-if="p.existenciaProducto > 0">
            <div class="down-content">
              <a href="/detalle">
                <h4>{{ p.descripcion }}</h4>
              </a>
              <h6>Bs{{ p.precio }}</h6>
              <p>{{ p.unidad }}</p>
              <h7>DISPONIBLE</h7>

            </div>

          </div>
          <div v-else>
            <div class="down-content">
              <a href="/detalle">
                <h4>{{ p.descripcion }}</h4>
              </a>
              <h6>Bs{{ p.precio }}</h6>
              <p></p>
              <h3>ARTÍCULO</h3>
              <h3>AGOTADO</h3>
            </div>
          </div>




        </div>
      </div>
    </div>
  </div>
  <!--FINALIZA LA VISTA DE PRODUCTOS CON IMAGENES-->
</template>

<style></style>