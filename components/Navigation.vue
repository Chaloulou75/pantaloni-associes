<template>
  <div class="">
     <nav class="relative flex items-center justify-between w-full px-6 py-4 bg-transparent border-gold border-t-14 "><!-- -->
      <a href="/" class="hidden text-sm font-bold text-gray-900 uppercase transition duration-500 ease-in-out transform cursor-pointer lg:inline-block lg:text-lg hover:text-black">
        <span class="hidden lg:inline-block">Pantaloni &amp; Associés</span>
        <span class="hidden lg:inline-block lg:text-sm">|</span>
        <span class="hidden text-xs text-center lg:inline-block lg:text-sm"> Avocats à la Cour</span>
      </a>

      <button
        class="text-gray-900 ease-in-out outline-none mobile-hamburger transition-500 lg:hidden focus:outline-none hover:text-gold"
        @click.prevent="show = ! show"
        aria-haspopup="true"
        :aria-expanded="show"
      >
        <svg v-if="!show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

        <svg v-if="show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="hidden desktop-menu lg:block">
        <ul class="flex justify-around space-x-6 text-lg font-semibold uppercase">
          <li class="px-3 text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#cabinet'}">Le cabinet</NuxtLink>
          </li>
          <!-- <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#savoir-faire'}">Savoir faire</NuxtLink>
            </li> -->
          <li class="relative px-3 text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2" @mouseover="listTeam = true" @mouseleave="listTeam = false">
            <NuxtLink :to="{ path: '/',hash:'#equipe'}">L'equipe</NuxtLink>
            <transition name="fade">
              <ul class="absolute right-0 w-64 px-4 py-2 mt-2 -mr-24 text-sm text-white bg-gray-800 rounded-lg" v-if="listTeam" @click="listTeam = false">
                <li class="px-2 py-2"><NuxtLink :to="{ path: '/',hash:'#MarcPantaloni'}">Marc PANTALONI</NuxtLink></li>
                <li class="px-2 py-2"><NuxtLink :to="{ path: '/',hash:'#MagaliGreiner'}">Magali GREINER</NuxtLink></li>
                <li class="px-2 py-2"><NuxtLink :to="{ path: '/',hash:'#GaelleGouguet'}">Gaëlle GOUGUET</NuxtLink></li>
                <li class="px-2 py-2"><NuxtLink :to="{ path: '/',hash:'#SandrineNivet-Abdoun'}">Sandrine NIVET-ABDOUN</NuxtLink></li>
              </ul>
            </transition>
          </li>
          <li class="px-3 text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#contact'}">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <transition name="fade">
        <ul class="absolute z-20 flex flex-col items-start w-full h-screen px-4 pb-6 space-y-2 text-lg uppercase bg-transparent mobile-menu lg:hidden" v-if="show" >
          <li class="px-3 font-semibold text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#cabinet'}">Le cabinet</NuxtLink>
          </li>
          <!-- <li class="px-3 text-gray-800 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900 hover:translate-x-2">
            <NuxtLink :to="{ path: '/',hash:'#savoir-faire'}">Savoir faire</NuxtLink>
          </li> -->
          <li class="relative px-3 font-semibold text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2" @mouseover="listTeam = true" @mouseleave="listTeam = false" >
            <NuxtLink :to="{ path: '/',hash:'#equipe'}">L'equipe</NuxtLink>
            <transition name="fade">
              <ul class="absolute left-0 w-56 px-4 py-2 ml-24 -mt-16 text-sm text-white bg-gray-800 rounded-lg" v-if="listTeam" @click="listTeam = false">
                <li class="px-2 py-2"><NuxtLink :to="{ path: '/',hash:'#MarcPantaloni'}">Marc PANTALONI</NuxtLink></li>
                <li class="px-2 py-2"><NuxtLink :to="{ path: '/',hash:'#MagaliGreiner'}">Magali GREINER</NuxtLink></li>
                <li class="px-2 py-2"><NuxtLink :to="{ path: '/',hash:'#GaelleGouguet'}">Gaëlle GOUGUET</NuxtLink></li>
                <li class="px-2 py-2"><NuxtLink :to="{ path: '/',hash:'#SandrineNivet-Abdoun'}">Sandrine NIVET-ABDOUN</NuxtLink></li>
              </ul>
            </transition>
          </li>
          <li class="px-3 font-semibold text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2">
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
              show: false,
              listTeam: false,
          };
      }
  }
</script>

<style lang="scss" scoped>

a {
  font-family: 'Cormorant Garamond', 'font-sans', sans-serif;
}
.fade-enter-active, .fade-leave-active {
    transition: all .4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-7px);
}

$color:#FFDF00;

a {
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
