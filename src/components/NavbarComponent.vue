<script>

</script>
<template>
    <nav class="flex justify-between items-center bg-blue-600 text-white p-5 shadow-md">
        <router-link
        to="/"
        class="text-xl font-bold hover:text-blue-200"
        >
            <h1>Nome do E-commerce</h1>
        </router-link>
        
        <div class="flex items-center gap-6 mr-3">
            <router-link
            to="/categories"
            class="text-xl hover:text-blue-200 transition-colors"
            >
                Categorias
            </router-link>

            <router-link
            to="/cart"
            class="hover:text-blue-200 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </router-link>
            
            <div class="flex items-center bg-blue-500 rounded-full px-3 py-1">
                <input type="text" class="bg-transparent outline-none placeholder-blue-200" placeholder="Pesquise seu produto....">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
    </nav>
</template>
<style scoped>

</style>