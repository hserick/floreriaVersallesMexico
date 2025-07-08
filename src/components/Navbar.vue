<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <h1 class="text-xl font-serif text-pink-600 tracking-wide">Florería Versalles México</h1>
      <button @click="open = !open" class="md:hidden text-pink-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav class="hidden md:flex space-x-6 text-gray-700">
        <RouterLink to="/" class="hover:text-pink-600">Inicio</RouterLink>
        <RouterLink to="/catalogo" class="hover:text-pink-600">Catálogo</RouterLink>
        <RouterLink to="/servicios" class="hover:text-pink-600">Servicios</RouterLink>
        <RouterLink to="/contacto" class="hover:text-pink-600">Contacto</RouterLink>
      </nav>
    </div>
    <!-- Menú móvil -->
    <div v-if="open" class="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-2">
      <RouterLink to="/" @click="open = false" class="block text-gray-800 hover:text-pink-600">Inicio</RouterLink>
      <RouterLink to="/catalogo" @click="open = false" class="block text-gray-800 hover:text-pink-600">Catálogo</RouterLink>
      <RouterLink to="/servicios" @click="open = false" class="block text-gray-800 hover:text-pink-600">Servicios</RouterLink>
      <RouterLink to="/contacto" @click="open = false" class="block text-gray-800 hover:text-pink-600">Contacto</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
