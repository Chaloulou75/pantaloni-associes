<template>
  <div class="h-auto my-8 " id="equipe">
    <h2 class="sticky top-0 z-30 py-4 mb-4 text-3xl font-semibold tracking-wider text-center bg-gray-300 opacity-75">L'équipe</h2>

    <div class="items-center justify-between my-8 lg:flex">
      <div class="w-full ">
        <img
          src="~assets/img/compress/livres.jpg"
          alt="equipe"
          class="mx-auto sm:mx-0"
        />
      </div>
    </div>
    <marc />
    <magali />
    <gaelle />
    <sandrine />
  </div>
</template>

<script>

import Marc from './Marc.vue'
import Sandrine from './Sandrine.vue'
import Gaelle from './Gaelle.vue'
import Magali from './Magali.vue'

export default {
  components : {
    Marc,
    Sandrine,
    Gaelle,
    Magali
  }
}
</script>

<style lang="scss" scoped>

</style>


