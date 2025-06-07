<template>
  <router-link
    :to="`/product/${categorie.name}`">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

      <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div class="relative h-40 bg-gray-200">
          <img 
            src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" 
            class="w-full h-full object-cover"
            alt="Categoria Beleza">
        </div>
        <div class="p-4 text-center">
          <h3 class="text-lg font-bold text-gray-800 mb-2">{{categorie.name}}</h3>
          <router-link 
            to="/categories/"
            class="text-blue-500 hover:text-blue-700 font-medium text-sm">
            Ver produtos
          </router-link>
        </div>
      </div>
      
      
    </div>
  </router-link>
  
</template>

<script setup>
defineProps({
    categorie: {
        type: Object,
    }
})




</script>