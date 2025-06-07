<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2 text-center">{{ categoryName }}</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  justify-items-center">
      <ProductComponent
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import ProductComponent from '../components/ProductComponent.vue';

export default {
  components: {
    ProductComponent
  },
  setup() {
    const products = ref([]);
    const route = useRoute();
    const categoryName = ref('');

    const fetchProductsByCategory = async (category) => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
        products.value = response.data.products.map(product => ({
          id: product.id,
          title: product.title,
          description: product.description,
          rating: product.rating,
          price: product.price, 
          tags: product.tags || [],
          thumbnail: product.thumbnail,
          stock: product.stock,
        }));
        categoryName.value = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      } catch (error) {
        console.error("Erro ao buscar produtos por categoria:", error);
        products.value = [];
        categoryName.value = 'Categoria não encontrada';
      }
    };

    watch(() => route.params.name, (newCategory) => {
      if (newCategory) {
        fetchProductsByCategory(newCategory);
      }
    }, { immediate: true });

    return {
      products,
      categoryName
    };
  }
}
</script>