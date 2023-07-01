<template>
  <div>
    <div class="grid grid-cols-2">
      <div>
        <img :src="`/images/iphone-${route.params.version}.jpg`" />
      </div>
      <div class="text-center">
        <h1 class="text-3xl">iPhone {{version}}</h1>
        <button @click="addToCart" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">
          <span v-if="isInCart()">Remove from the cart</span>
          <span v-else>Buy now</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const version = computed(() => route.params.version.replaceAll('-', ' ') );
const fullname = computed(() => `iphone-${route.params.version}`);
useHead({
  title: `Nuxt - iPhones ${route.params.version}`
})

const cart = useCart();

function isInCart() {
  return !! cart.value.find(ct => ct.name === fullname.value)
}

function addToCart() {
  if (!isInCart()) {
    cart.value.push({
      name: fullname
    })
  }
  else {
    cart.value = cart.value.filter(ct=> ct.name !== fullname.value)
  }

}
</script>