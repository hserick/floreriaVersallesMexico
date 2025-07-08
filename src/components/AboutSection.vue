<template>
  <section class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <blockquote class="text-xl italic text-gray-700 mb-8">
        “Cada flor tiene una historia. Nosotros te ayudamos a contarla.”
      </blockquote>
      <div class="grid md:grid-cols-3 gap-6 text-left mt-10">
        <div v-for="item in reasons" :key="item.title" class="bg-pink-100 p-6 rounded-lg shadow-sm">
          <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
          <p class="text-sm text-gray-700">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  { title: 'Envíos el mismo día', text: 'Realizamos entregas rápidas y cuidadosas en CDMX y área metropolitana.' },
  { title: 'Más de 10 años de experiencia', text: 'Profesionalismo y pasión floral en cada entrega.' },
  { title: 'Diseños personalizados', text: 'Cada arreglo es único, hecho con intención y detalle.' }
]
</script>
