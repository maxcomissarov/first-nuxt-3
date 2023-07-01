<template>
  <button @click="increment">+</button>
  {{counter}}
  <button @click="decrement">-</button>
</template>

<script setup>
const counter = ref(0);
function increment() {
  counter.value++;
}
function decrement() {
  counter.value--;
}
</script>

<style scoped>

</style>