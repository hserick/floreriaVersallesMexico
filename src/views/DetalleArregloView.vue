<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useArreglosStore } from '@/stores/arreglos'
import { onMounted, ref } from 'vue'

const route = useRoute()
const router = useRouter()
const arreglosStore = useArreglosStore()

const arreglo = ref(null)

onMounted(() => {
  if (arreglosStore.lista.length === 0) {
    arreglosStore.cargarArreglos()
  }
  arreglo.value = arreglosStore.lista.find(item => item.id === route.params.id)
})
</script>

<template>
  <section class="min-h-screen px-4 py-12 max-w-5xl mx-auto">
    <div v-if="arreglo" class="grid md:grid-cols-2 gap-10">
      <!-- Imagen -->
      <img
        :src="arreglo.imagen"
        :alt="arreglo.nombre"
        class="w-full rounded-lg shadow-lg object-cover h-96"
      />

      <!-- Información -->
      <div>
        <h1 class="text-3xl font-semibold text-pink-600 mb-4">{{ arreglo.nombre }}</h1>
        <p class="text-gray-700 mb-6">{{ arreglo.descripcion }}</p>

        <div class="flex gap-2 flex-wrap mb-8">
          <span
            v-for="cat in arreglo.categorias"
            :key="cat"
            class="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm"
          >
            #{{ cat }}
          </span>
        </div>

        <button
          class="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded transition"
        >
          Ordenar este arreglo
        </button>

        <button
          class="ml-4 text-sm text-pink-500 hover:underline"
          @click="router.push('/catalogo')"
        >
          ← Volver al catálogo
        </button>
      </div>
    </div>

    <div v-else class="text-center text-gray-600">
      <h2 class="text-xl mb-2">Arreglo no encontrado</h2>
      <button @click="router.push('/catalogo')" class="text-pink-500 hover:underline">
        Ir al catálogo
      </button>
    </div>
  </section>
</template>
