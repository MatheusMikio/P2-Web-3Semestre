<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-4">Carrinho de Compras</h2>
    <div class="space-y-4 mb-6">
      <div v-if="cartItems.length === 0" class="text-center text-gray-500">
        Seu carrinho está vazio.
      </div>
      <div v-else v-for="item in cartItems" :key="item.id" class="flex items-center space-x-4">
        <router-link
        :to="`/product/${item.id}`">
          <img :src="item.image" alt="Product Image" class="w-20 h-20 object-cover rounded-md" />
        </router-link>
        <div class="flex-1">
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <p class="text-gray-600">Preço: R$ {{ item.price.toFixed(2) }}</p>
          <div class="flex items-center mt-2">
            <button @click="decreaseItemQuantity(item.id)" class="bg-gray-200 text-gray-700 px-2 py-1 rounded-l-md hover:bg-gray-300">-</button>
            <span class="px-3 py-1 bg-gray-100 text-gray-800">{{ item.quantity }}</span>
            <button @click="increaseItemQuantity(item.id)" class="bg-gray-200 text-gray-700 px-2 py-1 rounded-r-md hover:bg-gray-300">+</button>
          </div>
          <p class="text-gray-800 font-bold mt-2">Total: R$ {{ (item.price * item.quantity).toFixed(2) }}</p>
        </div>
        <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-700 text-sm">Remover Item</button>
      </div>
    </div>

    <div class="border-t pt-4">
      <div class="flex justify-between text-gray-700">
        <span>Subtotal:</span>
        <span>R$ {{ subtotal.toFixed(2) }}</span>
      </div>
      <div class="flex justify-between text-gray-700">
        <span>Frete:</span>
        <span>Grátis</span>
      </div>
      <div class="flex justify-between font-bold text-lg mt-2">
        <span>Total:</span>
        <span>R$ {{ total.toFixed(2) }}</span>
      </div>
    </div>

    <button
      class="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Finalizar Compra
    </button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'CartInfoComponent',
  setup() {
    const store = useStore();

    const cartItems = computed(() => store.getters.cartItems);
    const subtotal = computed(() => store.getters.cartTotal);
    const shipping = computed(() => 0); 
    const total = computed(() => subtotal.value + shipping.value);

    const removeFromCart = (productId) => {
      store.dispatch('removeFromCart', productId);
    };

    const decreaseItemQuantity = (productId) => {
      store.dispatch('decreaseItemQuantity', productId);
    };

    const increaseItemQuantity = (productId) => {
      store.dispatch('increaseItemQuantity', productId);
    };

    return {
      cartItems,
      subtotal,
      shipping,
      total,
      removeFromCart,
      decreaseItemQuantity,
      increaseItemQuantity,
    };
  },
};
</script>