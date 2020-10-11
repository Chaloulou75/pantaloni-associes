<template>
  <div class="h-auto my-8" id="GaelleGouguet">

    <modalmobile-gaelle />

    <div class="hidden lg:flex-row-reverse lg:items-center lg:justify-between lg:flex">

      <div class="w-full my-4 lg:w-1/2">
        <img
          src="~assets/img/compress/livres2.jpg"
          alt="gaelle"
          class="mx-auto sm:mx-0"
        />

      </div>

      <div class="flex flex-col justify-between w-full px-6 py-4 lg:w-1/2">
           <modal-gaelle />
      </div>

    </div>
  </div>
</template>

<script>
import ModalGaelle from './ModalGaelle.vue'
import ModalmobileGaelle from './ModalmobileGaelle.vue'

export default {
  components : {
    ModalGaelle,
    ModalmobileGaelle
  }
}
</script>

<style lang="scss" scoped>

</style>


