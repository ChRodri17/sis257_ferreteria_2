<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
    ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const descripcion = ref('')

async function crearUnidad() {
    await http
        .post(ENDPOINT, { descripcion: descripcion.value })
        .then(() => router.push('/unidades'))
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
                                    <RouterLink to="/unidades">Unidads</RouterLink>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Crear</li>
                            </ol>
                        </nav>
                        <h2>CREAR NUEVA UNIDAD</h2>
                        <button class="btn btn-success" @click="goBack">Volver</button>
                    </div>
                </div>
            </div>
        </div>



        <div class="row">
            <form @submit.prevent="crearUnidad">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="descripcion" placeholder="Descripcion" required />
                    <label for="descripcion">Descripcion</label>
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