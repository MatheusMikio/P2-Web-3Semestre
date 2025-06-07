<template>
  <router-link
    :to="`/categories/${categorie.categoria}`">
      <div class="m-4 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div class="relative h-40 bg-gray-200">
          <img 
            :src="categorie.thumbnail" 
            class="w-full h-full object-cover"
            :alt="`Categoria ${categorie.name}`">
        </div>
        <div class="p-4 text-center">
          <h3 class="text-lg font-bold text-gray-800 mb-2">{{categorie.name}}</h3>
          <router-link 
            :to="`/categories/${categorie.categoria}`"
            class="text-blue-500 hover:text-blue-700 font-medium text-sm">
            Ver produtos
          </router-link>
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