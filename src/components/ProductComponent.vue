<template>
    <div class="max-w-xs rounded-lg overflow-hidden shadow-lg m-5 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <router-link
        to="/product">
            <div class="relative">
                <img class="w-full h-40 md:h-48 lg:h-56 object-cover" src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="Produto">
            </div>
            <div class="px-4 py-3 sm:px-6 sm:py-4">
                <div class="flex justify-between items-start mb-1">
                    <h3 class="font-bold text-lg text-gray-800">Paleta de Sombras</h3>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <span class="text-gray-600 text-sm ml-1">
                            5.0
                        </span>
                    </div>

                </div>
                <h2 class="text-gray-600 text-sm mb-2">Paleta de sombras com 12 cores vibrantes e espelho</h2>
                <div class="flex gap-2">
                    <span class="text-xs bg-gray-200 px-2 py-1 rounded">Beleza</span>
                    <span class="text-xs bg-gray-200 px-2 py-1 rounded">Estoque: 15</span>
                </div>
            </div>
        </router-link>
        <div class="px-6 pt-4 pb-2 flex justify-end items-center">
            <span class="bg-gray-300 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-3">R$ 99,99</span>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Comprar
            </button>
        </div>
    </div>
</template>
