<script setup>
import { useRoute } from 'vue-router'
import { useCategoriasStore } from '@/stores/categorias'
import { useArreglosStore } from '@/stores/arreglos'
import { computed, onMounted, watch } from 'vue'

const route = useRoute()

// Stores
const categoriasStore = useCategoriasStore()
const arreglosStore = useArreglosStore()

onMounted(() => {
  if (arreglosStore.lista.length === 0) {
    arreglosStore.cargarArreglos()
  }
})

// Query reactivo
const categoriaActual = computed(() => route.query.categoria)

// Categoría activa (objeto completo para obtener nombre/desc.)
const categoriaSeleccionada = computed(() =>
  categoriasStore.lista.find(cat => cat.id === categoriaActual.value)
)

// Arreglos filtrados por categoría (o todos si no hay filtro)
const arreglosFiltrados = computed(() =>
  categoriaActual.value
    ? arreglosStore.porCategoria(categoriaActual.value)
    : []
)
</script>

<template>
  <section class="min-h-screen px-4 py-12 max-w-6xl mx-auto">
    <!-- Vista SIN filtro: lista de categorías -->
    <div v-if="!categoriaActual">
      <h1 class="text-3xl font-semibold mb-6 text-center">Categorías de Arreglos Florales</h1>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(categoria, i) in categoriasStore.lista"
          :key="i"
          class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
          @click="$router.push(`/catalogo?categoria=${categoria.id}`)"
        >
          <img :src="categoria.imagen" :alt="categoria.nombre" class="h-64 w-full object-cover" />
          <div class="p-4">
            <h2 class="text-lg font-medium mb-1">{{ categoria.nombre }}</h2>
            <p class="text-sm text-gray-600">{{ categoria.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vista CON filtro: arreglos por categoría -->
    <div v-else>
      <div class="text-center mb-10">
        <h1 class="text-3xl font-semibold mb-2 text-pink-600">
          {{ categoriaSeleccionada?.nombre || 'Categoría no encontrada' }}
        </h1>
        <p class="text-gray-600">{{ categoriaSeleccionada?.descripcion }}</p>
        <button class="mt-4 text-sm text-pink-500 hover:underline" @click="$router.push('/catalogo')">
          ← Volver a categorías
        </button>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in arreglosFiltrados"
          :key="i"
          class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          @click="$router.push(`/arreglo/${item.id}`)"
        >
          <img :src="item.imagen" :alt="item.nombre" class="h-64 w-full object-cover" />
          <div class="p-4">
            <h2 class="text-lg font-medium">{{ item.nombre }}</h2>
            <p class="text-sm text-gray-600">{{ item.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
