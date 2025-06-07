<template>
        <NavbarComponent/>
        <router-view/>
        <notifications /> <!-- Adicione esta linha -->
</template>

<script setup>
import { ref } from 'vue';
import NavbarComponent from './components/NavbarComponent.vue';



const products = ref([]);

</script>