<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Seu Carrinho</h2>
    
    <div class="space-y-4 mb-6">
      <div class="flex items-center border-b pb-4">
        <img 
          src="#" 
          class="w-20 h-20 object-cover rounded mr-4"
          alt="Produto">
        <div class="flex-grow">
          <h3 class="font-medium text-gray-800">BBBBBBBBBBBBBBBBB</h3>
          <p class="text-sm text-gray-500">Quantidade: 2</p>
        </div>
        <div class="text-right">
          <p class="font-medium text-gray-800">R$ 299,90</p>
          <button class="text-red-500 text-sm mt-1">Remover</button>
        </div>
      </div>
    </div>

    <div class="border-t pt-4">
      <div class="flex justify-between mb-2">
        <span class="text-gray-600">Subtotal</span>
        <span class="font-medium">R$ 9.599,79</span>
      </div>
      <div class="flex justify-between mb-2">
        <span class="text-gray-600">Frete</span>
        <span class="font-medium">Grátis</span>
      </div>
      <div class="flex justify-between text-lg font-bold mt-4">
        <span>Total</span>
        <span>R$ 9.599,79</span>
      </div>

      <button class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium mt-6">
        Finalizar Compra
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartInfoComponent'
}
</script>