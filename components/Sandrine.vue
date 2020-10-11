<template>
  <div class="h-auto my-8" id="SandrineNivet-Abdoun">

    <modalmobile-sandrine />

    <div class="hidden lg:flex-row lg:items-center lg:justify-between lg:flex">

      <div class="w-full my-4 lg:w-1/2">
        <img
          src="~assets/img/compress/livres2.jpg"
          alt="Sandrine"
          class="mx-auto sm:mx-0"
        />

      </div>

      <div class="flex flex-col justify-between w-full px-6 py-4 lg:w-1/2">
           <modal-sandrine />
      </div>

    </div>
  </div>
</template>

<script>
import ModalSandrine from './ModalSandrine.vue'
import ModalmobileSandrine from './ModalmobileSandrine.vue'


export default {
  components : {
    ModalSandrine,
    ModalmobileSandrine
  }
}
</script>

<style lang="scss" scoped>

</style>


