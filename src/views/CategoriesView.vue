<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <CategoriesProductsComponent
        v-for="product in products"
            :key= product.categoria
            :categorie="product"
        />
    </div>
    
</template>
<script>
import { ref, onMounted} from 'vue';
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