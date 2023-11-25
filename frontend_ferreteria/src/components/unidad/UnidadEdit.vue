<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
    ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const descripcion = ref('')
const id = router.currentRoute.value.params['id']

async function editarUnidad() {
    await http
        .patch(`${ENDPOINT}/${id}`, {
            descripcion: descripcion.value,
        })
        .then(() => router.push('/unidades'))
}

async function getUnidad() {
    await http.get(`${ENDPOINT}/${id}`).then((response) => {
        ; (descripcion.value = response.data.descripcion)
    })
}

function goBack() {
    router.go(-1)
}

onMounted(() => {
    getUnidad()
})
</script>

<template>
  <div class="container">
<nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink to="/unidades">Unidads</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Editar</li>
            </ol>
        </nav>

        <div class="find-us">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">

                        <h2>EDITAR UNIDAD</h2>
                        <button class="btn btn-success" @click="goBack">Volver</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <form @submit.prevent="editarUnidad">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="descripcion" placeholder="Unidad" required />
                    <label for="unidad">Unidad</label>
                </div>
                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-primary btn-lg">Guardar</button>
                </div>
            </form>
        </div>
        <div class="text-left">
            <button class="btn btn-link" @click="goBack">Volver</button>
        </div>
    </div>
</template>


<style></style>