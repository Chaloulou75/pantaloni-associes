<template>
  <div class="font-sans">
     <nav class="relative flex items-center justify-between w-full px-6 py-4 bg-transparent border-gold border-t-14 "><!-- -->


      <a href="/" class="hidden text-sm font-semibold text-gray-800 uppercase transition duration-500 ease-in-out transform cursor-pointer lg:inline-block lg:text-lg hover:text-gray-900">
        <span class="hidden lg:inline-block">Pantaloni &amp; Associés</span>
        <span class="hidden lg:inline-block lg:text-sm">|</span>
        <span class="hidden text-xs text-center lg:inline-block lg:text-sm"> Avocats à la Cour</span>
      </a>



      <button
        class="ease-in-out outline-none mobile-hamburger transition-500 lg:hidden focus:outline-none hover:text-gold"
        @click.prevent="show = ! show"
        aria-haspopup="true"
        :aria-expanded="show"
      >
        <svg v-if="!show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <svg v-if="show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="hidden desktop-menu lg:block">
        <ul class="flex justify-around space-x-6 text-sm font-medium uppercase">
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#cabinet'}">Le cabinet</NuxtLink></li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#savoir-faire'}">Savoir faire</NuxtLink></li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#equipe'}">L'equipe</NuxtLink></li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2"><NuxtLink :to="{ path: '/',hash:'#contact'}">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>
    <transition name="fade">
        <ul class="absolute z-20 flex flex-col items-start w-full h-screen px-4 pb-6 space-y-2 text-lg bg-transparent mobile-menu lg:hidden" v-if="show" >
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#cabinet'}">Le cabinet</NuxtLink>
          </li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#savoir-faire'}">Savoir faire</NuxtLink>
          </li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#equipe'}">L'equipe</NuxtLink>
          </li>
          <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2">
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

<style lang="scss" scoped>

a {
  font-family: 'Chivo', sans-serif;
}
.fade-enter-active, .fade-leave-active {
    transition: all .4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-7px);
}

$color:#FFDF00;

li, a {
  background-image: linear-gradient(
      transparent calc(65% - 5px),
      darken($color, 1%) 5px,
  );
  background-size: 0;
  background-repeat: no-repeat;
  transition: 0.5s ease;

  &:hover {
    background-size: 100%;
  }
}
</style>
