<template>
  <div class="">
    <div class="6">
      <ProductComponent 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>
<script setup>
import ProductComponent from '../components/ProductDetailsComponent.vue';
</script>