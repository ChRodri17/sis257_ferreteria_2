<script setup lang="ts">
import type { Unidad } from '@/models/unidad'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var unidades = ref<Unidad[]>([])

async function getUnidades() {
  unidades.value = await http.get(ENDPOINT).then((response) => response.data)
  //va devolver un lista de unidades de la base de datos
}

function toEdit(id: number) {
  router.push(`/unidades/editar/${id}`)
  //redirecciona a otra vista en este caso a editar
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Intérprete?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getUnidades())
  }
}

onMounted(() => {
  getUnidades()
})
</script>

<template>
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
                <li class="breadcrumb-item active" aria-current="page">Unidads</li>
              </ol>
            </nav>
            <h2 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">LISTA DE UNIDADES</h2>
            <div class="col-12">
            </div>
          </div>
          <RouterLink class="btn btn-success" to="/unidades/crear"><i class="fa fa-plus-circle"></i></RouterLink>
        </div>
      </div>
    </div>
  </div>
  <br>
  <div class="container">


    <div class="table-responsive">
      <table class="table table-dark table-striped">
        <!-- <table class="table table-bordered"> -->
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Unidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-light" v-for="(unidad, index) in unidades.values()" :key="unidad.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ unidad.descripcion }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="toEdit(unidad.id)"><i class="fa fa-edit"></i></button> |
              <button class="btn btn-danger btn-sm" @click="toDelete(unidad.id)"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>