<template>
  <nav class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between">
    <div class="flex">
      <NuxtLink class="mr-4" to="/">Home</NuxtLink>
      <NuxtLink class="mr-4" to="/iphone">iPhone</NuxtLink>
      <p>Cart ({{ cart.length }})</p>
      <p>Page visit: {{ pageVisit }}</p>
    </div>

    <div v-if="auth.isAuthenticated">
      <NuxtLink to="/profile">Profile</NuxtLink>
      <button class="ml-4" @click="logout">Logout</button>
    </div>

    <NuxtLink v-else to="/login">Login</NuxtLink>

  </nav>
</template>

<script setup>
const cart = useCart();
const auth = useAuth();
const pageVisit = useVisitCount();
function logout() {
  auth.value.isAuthenticated = false;
  //location.reload()
}
</script>