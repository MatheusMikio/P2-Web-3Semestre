<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2 text-center">Beleza</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  justify-items-center">
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
      <ProductComponent/>
    </div>
  </div>
</template>

<script>
import ProductComponent from '../components/ProductComponent.vue';

export default {
  components: {
    ProductComponent
  }
}

</script>