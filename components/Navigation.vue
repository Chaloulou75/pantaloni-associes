<template>
  <div>
    <nav class="sticky flex justify-between w-full px-8 py-8 bg-gray-200 border-blue-700 border-t-14">

      <NuxtLink to="/" class="text-base font-semibold uppercase border-transparent lg:text-3xl">
      <svg class="inline-block w-8 h-8 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
      Pantaloni & Associés
      </NuxtLink>

      <button
        class="ease-in-out outline-none mobile-hamburger transition-200 lg:hidden focus:outline-none hover:text-green-700"
        @click="show = !show"
      >
        <svg v-if="!show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <svg v-if="show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="hidden desktop-menu lg:block">
        <ul class="flex justify-around space-x-6 font-medium uppercase">
          <li class="px-3 transition duration-500 ease-in-out transform shadow-sm hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#cabinet'}">Le cabinet</NuxtLink></li>
          <li class="px-3 transition duration-500 ease-in-out transform shadow-sm hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#expertise'}">L'expertise</NuxtLink></li>
          <li class="px-3 transition duration-500 ease-in-out transform shadow-sm hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#equipe'}">L'equipe</NuxtLink></li>
          <li class="px-3 transition duration-500 ease-in-out transform shadow-sm hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#contact'}">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>
    <transition name="fade" class="mobile-menu lg:hidden">
        <ul class="flex flex-col items-start w-full px-8 pb-6 space-y-3 text-xl font-semibold uppercase bg-gray-200" v-if="show">
          <li class="px-3 transition duration-500 ease-in-out transform shadow-sm hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#cabinet'}">Le cabinet</NuxtLink></li>
          <li class="px-3 transition duration-500 ease-in-out transform shadow-sm hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#expertise'}">L'expertise</NuxtLink></li>
          <li class="px-3 transition duration-500 ease-in-out transform shadow-sm hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#equipe'}">L'equipe</NuxtLink></li>
          <li class="px-3 transition duration-500 ease-in-out transform shadow-sm hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#contact'}">Contact</NuxtLink></li>
        </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
