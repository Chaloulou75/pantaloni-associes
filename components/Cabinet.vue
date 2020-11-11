<template>
    <div class="h-auto" id="cabinet">
      <h2 class="sticky top-0 z-30 py-4 mb-4 text-3xl font-semibold tracking-wider text-center bg-gray-300 opacity-75" > Le cabinet </h2>
      <div class="items-center justify-between my-8 lg:flex">
        <div class="w-full lg:w-1/2" data-scroll>
          <img loading="lazy" src="~assets/img/compress/statue.jpg" alt="cabinet" class="px-3 mx-auto" />
        </div>
        <div class="w-full px-4 py-4 lg:w-1/2" data-scroll>
          <div class="my-8 line-1"></div>
          <!-- <h3 class="py-2 text-2xl font-medium text-center">Un sous titre</h3> -->
          <p class="py-2 mx-auto text-xl tracking-wide text-justify text-indent">
          Depuis sa constitution, le Cabinet PANTALONI &amp; ASSOCIES propose à ses clients un accompagnement <span class="font-semibold">sur mesure</span> dans ses domaines d’interventions.
          </p>
          <p class="py-2 mx-auto text-xl tracking-wide text-justify text-indent">
          Le Cabinet dispose d’une compétence reconnue en <span class="font-semibold">matière pénale</span>, en <span class="font-semibold">Droit de la construction</span>, en <span class="font-semibold">Droit de la responsabilité</span> et en <span class="font-semibold">Droit des assurances</span>.
          </p>
          <p class="py-2 mx-auto text-xl tracking-wide text-justify text-indent">
          De taille humaine, croisant les compétences, le Cabinet assure un service personnalisé à ses clients qu’il conseille et accompagne en demande comme en défense dans le <span class="font-semibold">respect des règles professionnelles</span> et notamment de <span class="font-semibold">confidentialité</span>.
          </p>
          <p class="py-2 mx-auto text-xl tracking-wide text-justify text-indent">
          Sa clientèle est constituée d’Institutionnels, de grandes sociétés, moyennes et petites entreprises ainsi que de particuliers.
          </p>
          <div class="my-8 line-1"></div>
        </div>

      </div>
    </div>
</template>

<script>
import ScrollOut from "scroll-out"

export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .2
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
  transform: scale(0.85);
}
</style>

