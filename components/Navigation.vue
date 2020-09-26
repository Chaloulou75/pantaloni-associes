<template>
  <div>
    <nav class="relative flex justify-between w-full px-6 py-8 bg-transparent border-blue-700 border-t-14">

      <a href="/" class="text-sm font-semibold text-gray-900 uppercase border-transparent lg:text-lg">
      <svg class="inline-block w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
        Pantaloni & Associés <span class="hidden lg:inline-block lg:text-sm">|</span>
        <span class="block text-xs text-center lg:inline-block lg:text-sm"> Avocats à la Cour</span>
      </a>

      <button
        class="ease-in-out outline-none mobile-hamburger transition-500 lg:hidden focus:outline-none hover:text-blue-700"
        @click.prevent="show = ! show"
        aria-haspopup="true"
        :aria-expanded="show"
      >
        <svg v-if="!show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <svg v-if="show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="hidden desktop-menu lg:block">
        <ul class="flex justify-around space-x-6 font-medium uppercase">
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform hover:border-b-2 hover:border-orange-500 hover:text-orange-500 hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#cabinet'}">Le cabinet</NuxtLink></li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform hover:border-b-2 hover:border-orange-500 hover:text-orange-500 hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#savoir-faire'}">Savoir faire</NuxtLink></li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform hover:border-b-2 hover:border-orange-500 hover:text-orange-500 hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#equipe'}">L'equipe</NuxtLink></li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform hover:border-b-2 hover:border-orange-500 hover:text-orange-500 hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#contact'}">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>
    <transition name="fade">
        <ul class="absolute flex flex-col items-start w-full px-6 pb-6 space-y-3 text-lg font-semibold bg-transparent mobile-menu lg:hidden" v-if="show" >
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform hover:border-b-2 hover:border-orange-500 hover:text-orange-500 hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#cabinet'}">Le cabinet</NuxtLink>
          </li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform hover:border-b-2 hover:border-orange-500 hover:text-orange-500 hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#savoir-faire'}">Savoir faire</NuxtLink>
          </li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform hover:border-b-2 hover:border-orange-500 hover:text-orange-500 hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#equipe'}">L'equipe</NuxtLink>
          </li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform hover:border-b-2 hover:border-orange-500 hover:text-orange-500 hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#contact'}">Contact</NuxtLink>
          </li>
        </ul>
    </transition>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              show: false
          };
      }
  }

</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .4s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-7px);
  }
</style>
