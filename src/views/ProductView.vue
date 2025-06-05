<template>
      <ProductDetailsComponent 
        :product="product"
      />
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import ProductDetailsComponent from '../components/ProductDetailsComponent.vue';

const product = ref(null);
const route = useRoute();

const fetchProductDetails = async (id) => {
  console.log('Tentando buscar detalhes do produto para o ID:', id);
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    product.value = response.data;
    console.log('Detalhes do produto recebidos:', response.data);
  } catch (error) {
    console.error('Erro ao buscar detalhes do produto:', error);
    if (error.response) {
      // O servidor respondeu com um status de erro (ex: 404, 500)
      console.error('Dados do erro da resposta:', error.response.data);
      console.error('Status do erro da resposta:', error.response.status);
      console.error('Cabeçalhos do erro da resposta:', error.response.headers);
    } else if (error.request) {
      // A requisição foi feita, mas nenhuma resposta foi recebida
      console.error('Nenhuma resposta recebida para a requisição:', error.request);
    } else {
      // Algo aconteceu na configuração da requisição que disparou um erro
      console.error('Erro na configuração da requisição:', error.message);
    }
    product.value = null; 
  }
};

watch(() => route.params.id, (newId) => {
  if (newId) {
    fetchProductDetails(newId);
  }
}, { immediate: true });

</script>