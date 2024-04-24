<template>
    <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.description }}</p>
        <img :src="`${product.image}`" alt="">
    </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id

const { data: product } = await useFetch(uri)
definePageMeta({
    layout: "products"
})
</script>

<style scoped></style>