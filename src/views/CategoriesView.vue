<template>
    <CategoriesProductsComponent
    v-for="product in products" 
        :key="product.url" 
        :product="product"
    />
    
</template>
<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import CategoriesProductsComponent from '../components/CategoriesProductsComponent.vue'
export default {
    components: {
        CategoriesProductsComponent,
    },
}

const fetchProducts = async () => {
    const response = await axios.get(`https://dummyjson.com/products/categories`);
    products.value = response.data.products.map(product => ({
        id: product.id,
        categoria: product.slug,
        name: product.name,
        url: product.url
    }));
    totalProducts.value = response.data.total;
};
onMounted(fetchProducts)
</script>