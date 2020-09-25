<template>
  <div>
      <Hero />
      <Cabinet />
      <Expertise />
      <Equipe />
      <Contact />
  </div>
</template>

<script>
import Cabinet from './../components/Cabinet.vue'
import Expertise from './../components/Expertise.vue'
import Equipe from './../components/Equipe.vue'
import Contact from './../components/Contact.vue'
import Hero from './../components/Hero.vue'


export default {
  components :{
    Cabinet,
    Expertise,
    Equipe,
    Contact,
    Hero
  },
}
</script>

<style scoped>

</style>
