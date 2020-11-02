<template>
  <div class="relative">
      <Hero />
      <Cabinet />
      <!-- <Expertise /> -->
      <Equipe />
      <Contact />
      <Footer />
      <div id="myBtn" class="fixed bottom-0 right-0 z-20 mb-12 mr-5">
        <div class="p-2 bg-gray-100 border rounded-full opacity-50">
          <scroll-link href="#herotop" class="text-gray-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
          </scroll-link>
        </div>
      </div>
  </div>
</template>

<script>
import Hero from './../components/Hero.vue'
import Cabinet from './../components/Cabinet.vue'
import Equipe from './../components/Equipe.vue'
import Contact from './../components/Contact.vue'
import Footer from './../components/Footer.vue'
import ScrollLink from './../components/ScrollLink.vue'

export default {
  components :{
    Hero,
    Cabinet,
    Equipe,
    Contact,
    Footer,
    ScrollLink
  },
}
</script>

<style scoped>

</style>
