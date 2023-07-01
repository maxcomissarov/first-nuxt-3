<template>
  <article class="sidebar">
    <nav class="text-white bg-purple-700">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="about">About</NuxtLink>
      <NuxtLink to="profile">Profile</NuxtLink>
    </nav>
    <p>Dashboard</p>
    <p>Settings</p>
    <slot></slot>
  </article>
</template>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
}
</style>