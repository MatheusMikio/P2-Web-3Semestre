<template>
        <NavbarComponent/>
        <router-view/>
</template>

<script setup>
import { ref } from 'vue';
import NavbarComponent from './components/NavbarComponent.vue';

const products = ref([]);

</script>