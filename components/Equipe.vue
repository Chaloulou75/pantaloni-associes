<template>
  <div class="h-auto" id="equipe">
    <h2 class="sticky top-0 z-30 py-4 mb-4 text-3xl font-semibold tracking-wider text-center bg-gray-300 opacity-75" >L'équipe</h2>

    <div class="items-center justify-between lg:flex">

      <div class="w-full lg:w-1/2">
        <Modal2 />
        <!-- Photo de l'equipe -->
      </div>

      <div class="flex flex-col justify-between w-full px-6 lg:w-1/2">

        <h2 class="hidden py-2 mb-6 text-5xl font-medium text-center text-gray-700 hover:text-gray-600 lg:block">Description générale de l'équipe</h2>
        <div class="hidden py-2 line-1 lg:block"></div>

          <p class="px-4 mx-auto text-lg tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quo
            blanditiis sequi possimus, nesciunt corrupti nam iusto vero omnis
            repudiandae cumque ipsam. Ab repudiandae sed distinctio illum vero,
            incidunt facere.<br />
            Ut cillum cillum nostrud sunt id elit. Quis pariatur amet ipsum
            exercitation cupidatat cupidatat dolore. Culpa cillum ipsum aliquip
            aliqua consectetur est sunt commodo cillum est pariatur.
          </p>
      </div>
    </div>

    <Marc />
    <Personne2 />
    <Personne3 />
    <Personne4 />
  </div>
</template>

<script>
import Modal2 from './Modal2.vue'
import Marc from './Marc.vue'
import Personne2 from './Personne2.vue'
import Personne3 from './Personne3.vue'
import Personne4 from './Personne4.vue'

export default {
  components : {
    Modal2,
    Marc,
    Personne2,
    Personne3,
    Personne4
  }
}
</script>

<style lang="scss" scoped>

</style>


