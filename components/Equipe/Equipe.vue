<template>
  <div class="min-h-full my-8 " id="equipe">
    <h2 class="sticky top-0 z-30 py-4 mb-4 text-3xl font-semibold tracking-wider text-center bg-gray-300 opacity-75">L'équipe</h2>

    <div class="items-center justify-between my-8 overflow-hidden lg:flex">
      <div class="w-full" data-scroll>
        <img
          loading="lazy"
          src="~assets/img/compress/livres.jpg"
          alt="equipe"
          class="mx-auto sm:mx-0"
        />
      </div>
    </div>
    <EquipeMarc />
    <EquipeGaelle />
    <EquipeMagali />
    <EquipeSandrine />
  </div>
</template>

<script>
import ScrollOut from "scroll-out"

export default {
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
  transition: all 1.7s;
}

[data-scroll="in"] {
  opacity: 1;
  transform: scale(1);
}
[data-scroll="out"] {
  opacity: 0;
  transform: scale(0.9);
}

</style>


