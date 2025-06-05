<template>
    <nav class="flex flex-col md:flex-row justify-between items-center bg-blue-600 text-white p-5 shadow-md gap-4 md:gap-0">
        <router-link to="/" class="text-xl font-bold hover:text-blue-200">
            <h1>Nome do E-commerce</h1>
        </router-link>
        
        <div class="flex items-center gap-4 w-full md:w-auto">
            <div class="flex items-center bg-blue-500 rounded-full px-3 py-1 w-full md:w-auto">
                <input 
                    type="text" 
                    v-model="searchQuery"
                    @keyup.enter="searchProducts"
                    class="bg-transparent outline-none placeholder-blue-200 w-full" 
                    placeholder="Pesquise seu produto....">
                <svg 
                @click="searchProducts"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
            </div>
            
            <div class="md:hidden">
                <button @click="isOpen = !isOpen" 
                class="text-white focus:outline-none">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            
            <div v-if="isOpen" class="absolute top-28 right-0 bg-blue-600 p-3 rounded shadow-lg md:hidden z-50">
                <router-link to="/categories" class="block py-2 hover:text-blue-200">
                    Categorias
                </router-link>
                <router-link to="/cart" class="block py-2 hover:text-blue-200">
                    Carrinho
                </router-link>
            </div>
            
            <div class="hidden md:flex items-center gap-6">
                <router-link to="/categories" class="text-xl hover:text-blue-200 transition-colors">
                    Categorias
                </router-link>
                <router-link to="/cart" class="hover:text-blue-200 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            isOpen: false,
            searchQuery: ''
        }
    },
    watch: {
        searchQuery(newVal) {
            if (newVal === '') {
                this.$router.push({ path: '/', query: {} });
                this.$emit('reset-search');
                console.log('Campo de busca limpo');
                this.searchProducts();
            }
        }
    },
    methods: {
        async searchProducts() {
            if (this.searchQuery.trim()) {
                const response = await axios.get(`https://dummyjson.com/products/search?q=${this.searchQuery}`);
                this.$router.push({
                    path: '/',
                    query: { search: this.searchQuery }
                });
                this.$emit('search-results', response.data.products);
            } else {
                this.$router.push({ path: '/', query: {} });
                this.$emit('reset-search');
                console.log('Resetando');
            }
        }
    }
}
</script>
<style scoped>

</style>