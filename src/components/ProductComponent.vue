<template>
    <div class="max-w-xs rounded-lg overflow-hidden shadow-lg m-5 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <router-link
        :to="`/product/${product.id}`">
            <div class="relative">
                <img class="w-full h-40 md:h-48 lg:h-56 object-cover" :src="product.thumbnail" :alt="product.title">
            </div>
            <div class="px-4 py-3 sm:px-6 sm:py-4">
                <div class="flex justify-between items-start mb-1">
                    <h3 class="font-bold text-lg text-gray-800">
                        {{ product.title }}
                    </h3>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <span class="text-gray-600 text-sm ml-1">
                            {{ product.rating ? product.rating.toFixed(1) : '0' }}
                        </span>
                    </div>

                </div>
                <h2 class="text-gray-600 text-sm mb-2">{{ product.description }}</h2>
                <div class="flex gap-2">
                    <span class="text-xs bg-gray-200 px-2 py-1 rounded mb-1" v-for="tag in product.tags">{{ tag }}</span>
                </div>
                <span class="text-xs bg-gray-200 px-2 py-1 rounded">Estoque: {{ product.stock }}</span>
            </div>
        </router-link>
        <div class="px-6 pt-4 pb-2 flex justify-between items-center">
      <span class="text-lg font-bold text-gray-800">
        {{ product?.price }}
      </span>
      <router-link
      :to="`/cart/${product.id}`">
      <input type="hidden" v-model ="name" :value = " `${product.title}`">
      <input type="hidden" v-model ="valor" :value = "`${product.price}`">
        <button @click="add"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
        :disabled="!product"
        aria-label="Adicionar ao carrinho"
        >
        Comprar
        </button>
      </router-link>
      
    </div>
    </div>
</template>

<script setup>
import data from "../views/home.vue"
defineProps({
    product: {
        type: Object,
    }
})
</script>