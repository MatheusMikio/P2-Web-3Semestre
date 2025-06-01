<template>
  <div class="max-w-7xl mx-auto p-4">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full md:w-1/2">
        <div class="bg-white p-4 rounded-lg shadow mb-4">
          <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" class="w-full h-auto rounded" alt="Imagem do produto">
        </div>
        <div class="grid grid-cols-4 gap-2">
          <div class="border rounded p-1 cursor-pointer">
            <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" class="w-full h-auto" alt="Miniatura">
          </div>
          <div class="border rounded p-1 cursor-pointer">
            <img src="https://via.placeholder.com/150" class="w-full h-auto" alt="Miniatura">
          </div>
          <div class="border rounded p-1 cursor-pointer">
            <img src="https://via.placeholder.com/150" class="w-full h-auto" alt="Miniatura">
          </div>
          <div class="border rounded p-1 cursor-pointer">
            <img src="https://via.placeholder.com/150" class="w-full h-auto" alt="Miniatura">
          </div>
        </div>
      </div>
      
      <div class="w-full md:w-1/2">
        <h1 class="text-2xl font-bold mb-2">Essence Mascara Lash Princess</h1>
        <div class="flex items-center mb-2">
          <div class="flex text-yellow-400 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
          <a href="#reviews" class="text-blue-500 text-sm">42 avaliações</a>
        </div>
        
        <div class="bg-gray-100 p-4 rounded-lg mb-4">
          <p class="text-2xl font-bold text-red-600 mb-2">R$ 8.999,99</p>
          <p class="text-sm">Frete: <span class="font-semibold">Grátis</span> para seu endereço</p>
        </div>
        
        <div class="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 class="font-bold text-lg mb-3 text-gray-800">Sobre este item</h3>
          <p class="text-gray-600 leading-relaxed">
            The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
          </p>
        </div>
        
        <div class="flex flex-col space-y-2">
          <button class="bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-full font-medium">
            Adicionar ao carrinho
          </button>
          <router-link
          to="/cart"
          class="bg-orange-400 hover:bg-orange-500 py-2 px-4 rounded-full font-medium text-center ">
            <button >
              Comprar agora
            </button>
          </router-link>
        </div>
      </div>
    </div>
    
    <div id="reviews" class="mt-10">
      <h2 class="text-xl font-bold mb-4">Avaliações de clientes</h2>
      <div class="bg-white p-4 rounded-lg shadow mb-4">
        <div class="flex items-center mb-4">
          <div class="text-3xl font-bold mr-4">4.8</div>
          <div>
            <div class="flex items-center mb-1">
              <div class="flex text-yellow-400 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <span class="text-sm text-gray-600">42 avaliações globais</span>
            </div>
          </div>
        </div>
        
        <div class="border-t pt-4 mb-4">
          <div class="flex justify-between items-start mb-2">
            <div>
              <span class="font-medium">João Silva</span>
              <span class="text-gray-500 text-sm ml-2">15/05/2023</span>
            </div>
            <div class="flex text-yellow-400">
              ★★★★★
            </div>
          </div>
          <h3 class="font-medium mb-1">Excelente produto!</h3>
          <p class="text-gray-700 mb-2">O computador chegou rápido e funciona perfeitamente. Recomendo!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails'
};
</script>