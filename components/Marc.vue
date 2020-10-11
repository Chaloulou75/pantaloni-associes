<template>
  <div class="h-auto my-8" id="MarcPantaloni">

    <modalmobile-marc />

    <div class="hidden lg:flex-row-reverse lg:items-center lg:justify-between lg:flex">

      <div class="w-full my-4 lg:w-1/2">
        <img
          src="~assets/img/compress/livres2.jpg"
          alt="Marc"
          class="mx-auto sm:mx-0"
        />

      </div>

      <div class="flex flex-col justify-between w-full px-6 py-4 lg:w-1/2">
           <modal-marc />
      </div>

    </div>
  </div>
</template>

<script>
import ModalMarc from './ModalMarc.vue'
import ModalmobileMarc from './ModalmobileMarc.vue'

export default {
  components : {
    ModalMarc,
    ModalmobileMarc
  }
}
</script>

<style lang="scss" scoped>

</style>


