<template>
  <div class="h-auto my-8 " id="equipe">
    <h2 class="sticky top-0 z-30 py-4 mb-4 text-3xl font-semibold tracking-wider text-center bg-gray-300 opacity-75">-L'équipe-</h2>

    <div class="w-full px-4 py-4 mx-auto mb-10 container-inner">
      <h3 class="py-2 text-2xl font-medium text-center">Un sous titre</h3>
      <div class="line-1"></div>
      <p class="py-4 mx-auto text-lg tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quo blanditiis sequi possimus, nesciunt corrupti nam iusto vero omnis repudiandae cumque ipsam. Ab repudiandae sed distinctio illum vero, incidunt facere.<br>
      Ut cillum cillum nostrud sunt id elit. Quis pariatur amet ipsum exercitation cupidatat cupidatat dolore. Culpa cillum ipsum aliquip aliqua consectetur est sunt commodo cillum est pariatur. Eu voluptate culpa dolore cupidatat officia mollit Lorem. Eiusmod magna in est veniam adipisicing enim est adipisicing eu ea reprehenderit aliqua elit exercitation. Minim consectetur quis nostrud aute consectetur ut non veniam in culpa ad tempor. Velit qui officia commodo anim minim dolor nulla eu reprehenderit ea esse.</p>
    </div>

    <div class="items-center justify-between my-8 lg:flex">
      <div class="w-full lg:w-1/2">
        <img
          src="~assets/img/compress/livres.jpg"
          alt="plume"
          class="mx-auto sm:mx-0"
        />
        <!-- Photo de l'equipe -->
      </div>

      <div class="flex flex-col justify-between w-full px-6 lg:w-1/2">
          <h3 class="py-2 text-2xl font-medium text-center">Un sous titre</h3>
          <div class="line-1"></div>
          <p class="py-4 mx-auto text-lg tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quo blanditiis sequi possimus, nesciunt corrupti nam iusto vero omnis repudiandae cumque ipsam. Ab repudiandae sed distinctio illum vero, incidunt facere.<br>
          Ut cillum cillum nostrud sunt id elit. Quis pariatur amet ipsum exercitation cupidatat cupidatat dolore. Culpa cillum ipsum aliquip aliqua consectetur est sunt commodo cillum est pariatur. Eu voluptate culpa dolore cupidatat officia mollit Lorem. Eiusmod magna in est veniam adipisicing enim est adipisicing eu ea reprehenderit aliqua elit exercitation. Minim consectetur quis nostrud aute consectetur ut non veniam in culpa ad tempor. Velit qui officia commodo anim minim dolor nulla eu reprehenderit ea esse.</p>
      </div>
    </div>

    <Personne1 />
    <Personne2 />
    <Personne3 />
    <Personne4 />
  </div>
</template>

<script>

import Personne1 from './Personne1.vue'
import Personne2 from './Personne2.vue'
import Personne3 from './Personne3.vue'
import Personne4 from './Personne4.vue'

export default {
  components : {
    Personne1,
    Personne2,
    Personne3,
    Personne4
  }
}
</script>

<style lang="scss" scoped>

</style>


