<template>
  <div class="container mx-auto px-20 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductComponent 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
        class="w-full"
      />
    </div>

    <div class="flex justify-center gap-4">
      <button 
      @click="previousPage"
      class="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50" :disabled="skip === 0">
        Anterior
      </button>

      <button 
      @click="nextPage"
      class="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50" 
      :disabled="skip + limit >= totalProducts">
      Proximo
      </button>
    </div>
  </div>
</template>

<script setup>



import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import ProductComponent from '../components/ProductComponent.vue';

const app = new Vue({
  el: '#app',
  data: {
    name: '',
    valor: 0
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.age) {
      this.valor = localStorage.valor;
    }
  },
  methods: {
    add() {
      localStorage.name = this.name;
      localStorage.valor = this.valor;
      console.log('now pretend I did more stuff...');
    }
  }
})

const products = ref([]);
const skip = ref(0);
const limit = 12;
const route = useRoute();
const totalProducts = ref(0);


const fetchProducts = async () => {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip.value}`);
    products.value = response.data.products.map(product => ({
        id: product.id,
        title: product.title,
        description: product.description,
        rating: product.rating,
        price: `R$ ${product.price.toFixed(2).replace('.', ',')}`,
        tags: product.tags || [],
        thumbnail: product.thumbnail,
        stock: product.stock,
    }));
    totalProducts.value = response.data.total;
};

const searchProducts = async (query) => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    products.value = response.data.products.map(product => ({
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

const previousPage = () => {
  if(skip.value >= limit){
    skip.value -= limit
    fetchProducts()
  }
}

const nextPage = () => {
  skip.value += limit
  fetchProducts()
}

watch(() => route.query.search, (newVal) => {
    if (newVal) {
        searchProducts(newVal);
    } else {
        fetchProducts();
    }
}, { immediate: true });

onMounted(fetchProducts)
</script>