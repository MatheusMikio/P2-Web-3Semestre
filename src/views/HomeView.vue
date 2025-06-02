<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductComponent 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup>
import{ ref, onMounted } from 'vue'
import axios from 'axios'
import ProductComponent from '../components/ProductComponent.vue';

const products = ref([]);
const fetchProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    const results = response.data.products

    products.value = results.map(product => ({
        id: product.id,
        title: product.title,
        description: product.description,
        rating: product.rating,
        price: `R$ ${product.price.toFixed(2).replace('.', ',')}`,
        tags: product.tags || [],
        thumbnail: product.thumbnail,
        stock: product.stock,
    }))
}
onMounted(fetchProducts)
</script>