<script setup>
import { useArreglosStore } from '@/stores/arreglos'
import { onMounted, ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const store = useArreglosStore()
const router = useRouter()
const scrollContainer = ref(null)
let autoplayInterval = null

onMounted(() => {
  if (store.lista.length === 0) {
    store.cargarArreglos()
  }

  // Autoplay loop
  autoplayInterval = setInterval(() => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollLeft += 320
      const maxScroll = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth
      if (scrollContainer.value.scrollLeft >= maxScroll - 10) {
        scrollContainer.value.scrollLeft = 0 // Regresa al inicio
      }
    }
  }, 4000)
})

onBeforeUnmount(() => {
  clearInterval(autoplayInterval)
})
</script>

<template>
  <section class="py-12 bg-white">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-semibold mb-8">Arreglos Destacados</h2>

      <div class="relative">
        <!-- Botones -->
        <button
          @click="scrollContainer.scrollLeft -= 320"
          class="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-3xl text-gray-500 hover:text-gray-700"
        >
          ‹
        </button>

        <button
          @click="scrollContainer.scrollLeft += 320"
          class="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-3xl text-gray-500 hover:text-gray-700"
        >
          ›
        </button>

        <!-- Carrusel -->
        <div
          ref="scrollContainer"
          class="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth px-4 pb-4"
        >
          <div
            v-for="item in store.destacados"
            :key="item.id"
            @click="router.push(`/arreglo/${item.id}`)"
            class="min-w-[80%] sm:min-w-[45%] md:min-w-[30%] cursor-pointer snap-start"
          >
            <div class="bg-pink-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img :src="item.imagen" :alt="item.nombre" class="h-64 w-full object-cover" />
              <div class="p-4">
                <h3 class="text-lg font-medium">{{ item.nombre }}</h3>
                <p class="text-sm text-gray-600">{{ item.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
