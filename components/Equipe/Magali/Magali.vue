<template>
  <div class="h-auto my-24 overflow-hidden" id="MagaliGreiner">

    <modalmobile-magali />

    <div class="hidden lg:flex-row-reverse lg:items-center lg:justify-between lg:flex">

      <div class="w-full my-4 lg:w-1/2" data-scroll>
        <img
          loading="lazy"
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
import ScrollOut from "scroll-out"
import ModalMagali from './ModalMagali.vue'
import ModalmobileMagali from './ModalmobileMagali.vue'

export default {
  components : {
    ModalMagali,
    ModalmobileMagali
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .3
    });
  },
  destroyed() {
    this.so.teardown();
  }
}
</script>

<style scoped>

[data-scroll] {
  transition: all 1.5s;
}

[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
[data-scroll="out"] {
  opacity: 0;
  transform: translateX(150px);
}

</style>


