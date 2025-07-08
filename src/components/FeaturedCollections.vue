<template>
  <section class="py-12 bg-pink-50">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-semibold mb-8">Colecciones Destacadas</h2>
      <div v-if="!categoriaSeleccionada" class="grid md:grid-cols-4 gap-6">
        <div 
        v-for="(categoria, index) in coleccionesDestacadas" 
        :key="index" 
        class="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer"
        @click="categoriaSeleccionada = categoria">
          <img :src="categoria.imagen" :alt="categoria.nombre" class="h-48 w-full object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">{{ categoria.nombre }}</h3>
            <p class="text-sm text-gray-600">Ver más</p>
          </div>
        </div>
      </div>

      <div v-else>
        <h3 class="text-2xl font-semibold mb-4 text-pink-600">{{ categoriaSeleccionada.nombre }}</h3>
        <button class="mb-6 text-sm text-gray-500 hover:underline" @click="categoriaSeleccionada = null">
          ← Volver a categorías
        </button>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="item in arreglosFiltrados"
            :key="item.id"
            class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
            @click="router.push(`/arreglo/${item.id}`)"
          >
            <img :src="item.imagen" :alt="item.nombre" class="h-64 w-full object-cover" />
            <div class="p-4">
              <h4 class="text-lg font-medium">{{ item.nombre }}</h4>
              <p class="text-sm text-gray-600">{{ item.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import { useCategoriasStore } from '../stores/categorias';
import { useArreglosStore } from '../stores/Arreglos';
import { useRouter } from 'vue-router';

const router = useRouter()

const categoriasStore = useCategoriasStore()
const arreglosStore = useArreglosStore()
const categoriaSeleccionada = ref(null) 

onMounted(()=>{
    if(arreglosStore.lista.length === 0) arreglosStore.cargarArreglos()
})

const coleccionesDestacadas = computed(()=>
categoriasStore.lista.filter( cat => cat.destacado)
)

const arreglosFiltrados = computed(()=> {
    if(!categoriaSeleccionada.value) return []
    return arreglosStore.porCategoria(categoriaSeleccionada.value.id)
})

/*
const irAColleccion = (slug)=>{
    router.push(`/catalogo?categoria=${slug}`)
}

const collections = [
  { title: 'Cumpleaños', img: '/src/img/arreglos/cumple.png', slug: 'cumple' },
  { title: 'Amor y Romance', img: '/src/img/arreglos/romance.png', slug: 'romance' },
  { title: 'Detalles Elegantes', img: '/src/img/arreglos/elegantes.png', slug: 'elegantes' },
  { title: 'Condolencias', img: '/src/img/arreglos/condolencias.png', slug: 'condolencias' }
]
*/
</script>
