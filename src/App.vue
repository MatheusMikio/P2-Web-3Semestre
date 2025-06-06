<template>
    <NavbarComponent/>
    <router-view :products="products"/>
</template>

<script setup>
import { ref } from 'vue';
import NavbarComponent from './components/NavbarComponent.vue';

const products = ref([]);

</script>