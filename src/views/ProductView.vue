<template>
      <ProductDetailsComponent 
        :product="product"
      />
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import ProductDetailsComponent from '../components/ProductDetailsComponent.vue';

const product = ref(null);
const route = useRoute();

const fetchProductDetails = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    product.value = response.data;
  } catch (error) {
    product.value = null; 
  }
};

watch(() => route.params.id, (newId) => {
  if (newId) {
    fetchProductDetails(newId);
  }
}, { immediate: true });

</script>