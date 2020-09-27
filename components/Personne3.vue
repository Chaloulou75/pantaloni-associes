<template>
  <div class="h-auto">

    <h2 class="py-2 mb-6 text-5xl font-medium text-center text-gray-700 hover:text-gray-600 lg:hidden">Chantal Doe</h2>
    <div class="py-2 line-1 lg:hidden"></div>

    <div class="flex-row-reverse items-center justify-between lg:flex">

      <div class="w-full lg:w-1/2">
        <Modal3 />
      </div>

      <div class="flex flex-col justify-between w-full px-6 py-4 lg:w-1/2">
           <h2 class="hidden py-2 mb-6 text-5xl font-medium text-center text-gray-700 hover:text-gray-600 lg:block">Chantal Doe</h2>
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
  </div>
</template>

<script>
import Modal3 from './Modal3.vue'

export default {
  components : {
    Modal3
  }
}
</script>

<style lang="scss" scoped>

</style>


