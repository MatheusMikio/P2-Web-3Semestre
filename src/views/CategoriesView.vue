<template>
    <CategoriesProductsComponent
    v-for="(index,product) in products" 
        :key="index"
        :categorie="product"
    />
    
</template>
<script>
import { ref, onMounted, watch } from 'vue';
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
        categoria: product.slug,
        name: product.name,
        url: product.url
    }));
    totalProducts.value = response.data.total;
};
onMounted(fetchProducts)
</script>