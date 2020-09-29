<template>
  <div class="h-auto my-8">

    <Modalmobile />

    <div class="hidden lg:flex-row lg:items-center lg:justify-between lg:flex">

      <div class="w-full my-4 lg:w-1/2">
        <img
          src="~assets/img/compress/livres2.jpg"
          alt="plume"
          class="mx-auto sm:mx-0"
        />

      </div>

      <div class="flex flex-col justify-between w-full px-6 py-4 lg:w-1/2">
           <Modal2 />
      </div>

    </div>
  </div>
</template>

<script>
import Modal2 from './Modal2.vue'

export default {
  components : {
    Modal2
  }
}
</script>

<style lang="scss" scoped>

</style>


