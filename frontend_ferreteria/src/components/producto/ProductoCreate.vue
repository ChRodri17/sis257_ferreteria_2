<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const codigo = ref('')
const descripcion = ref('')
const unidad = ref('')
const precio = ref('')
const existenciaProducto = ref('')

async function crearProducto() {
  await http
    .post(ENDPOINT, {
      codigo: codigo.value,
      descripcion: descripcion.value,
      unidad: unidad.value,
      precio: precio.value,
      existenciaProducto: existenciaProducto.value
    })

    .then(() => router.push('/productos'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">


    <div class="find-us">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item">
                  <RouterLink to="/productos">Productos</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Crear</li>
              </ol>
            </nav>
            <h2>EDITAR DATOS DEL PRODUCTO</h2>
            <button class="btn btn-link" @click="goBack">Volver</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <form @submit.prevent="crearProducto">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="codigo" placeholder="Codigo" required />
          <label for="codigo">Codigo</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" v-model="descripcion" placeholder="Descripcion" required />
          <label for="descripcion">Descripcion</label>
        </div>

        <div class="form-floating">
          <input type="text" class="form-control" v-model="unidad" placeholder="Unidad" required />
          <label for="unidad">Unidad</label>
        </div>
        <div class="form-floating">
          <input type="number" class="form-control" v-model="precio" placeholder="Precio" required />
          <label for="precio">Precio</label>
        </div>
        <div class="form-floating">
          <input type="number" class="form-control" v-model="existenciaProducto" placeholder="Existencia Producto"
            required />
          <label for="existenciaProducto">Existencia Producto</label>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Crear</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>