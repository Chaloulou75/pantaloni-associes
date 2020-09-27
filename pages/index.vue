<template>
  <div>
      <Hero />
      <Cabinet />
      <Expertise />
      <Equipe />
      <Contact />
      <Footer />

  </div>
</template>

<script>
import Hero from './../components/Hero.vue'
import Cabinet from './../components/Cabinet.vue'
import Expertise from './../components/Expertise.vue'
import Equipe from './../components/Equipe.vue'
import Contact from './../components/Contact.vue'
import Footer from './../components/Footer.vue'

export default {
  components :{
    Hero,
    Cabinet,
    Expertise,
    Equipe,
    Contact,
    Footer
  },
  data() {
      return {
        title: 'Pantaloni & Associés | Avocats à la Cour'
      }
    },
  head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'Description ',
            name: 'Description',
            content: 'Pantaloni & Associés | Avocats à la Cour'
          }
        ]
      }
    }
}
</script>

<style scoped>

</style>
