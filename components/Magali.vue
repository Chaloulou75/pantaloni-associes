<template>
  <div class="h-auto my-8">

    <modalmobile-magali />

    <div class="hidden lg:flex-row lg:items-center lg:justify-between lg:flex">

      <div class="w-full my-4 lg:w-1/2">
        <img
          src="~assets/img/compress/livres2.jpg"
          alt="Magali"
          class="mx-auto sm:mx-0"
        />

      </div>

      <div class="flex flex-col justify-between w-full px-6 py-4 lg:w-1/2">
           <modal-magali />
      </div>

    </div>
  </div>
</template>

<script>
import ModalMagali from './ModalMagali.vue'
import ModalmobileMagali from './ModalmobileMagali.vue'

export default {
  components : {
    ModalMagali,
    ModalmobileMagali
  }
}
</script>

<style lang="scss" scoped>

</style>


