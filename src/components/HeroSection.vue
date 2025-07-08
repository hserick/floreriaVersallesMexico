
<template>
  <section class="relative h-[80vh]">
    <img src="/img/banners/inicio1.jpg" alt="Banner" class="absolute inset-0 w-full h-full object-cover z-0"/>
    <div class="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4">
      <div class="text-center text-white max-w-xl">
        <h1 class="text-4xl md:text-5xl font-serif mb-4">Flores que hablan por ti</h1>
        <p class="mb-6">Envíos en CDMX — Arreglos personalizados — Atención con el corazón</p>
        <button @click="scrollToDestacados" class="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-md transition-all duration-200">
          Explora los arreglos
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToDestacados = () =>{
const target = document.getElementById('destacados')
if(target){
  target.scrollIntoView({behavior: 'smooth'})
}
}
</script>