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
    setup() {
        const products = ref([]);
        const totalProducts = ref(0);

        const fetchProducts = async () => {
            const response = await axios.get(`https://dummyjson.com/products/categories`);
            products.value = response.data.map(product => ({
                categoria: product.slug,
                name: product.name,
                url: product.url
            }));
        };
        onMounted(fetchProducts);

        return {
            products,
            totalProducts
        };
    }
}
</script>