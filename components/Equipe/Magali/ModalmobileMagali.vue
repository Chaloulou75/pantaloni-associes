<template>
<div class="relative ">
  <div class="flex items-center justify-center w-full h-full">
    <transition name="fade">

      <div v-show="show_modal" class="fixed inset-0 z-40">

<!--       background -->
        <div v-show="show_modal" @click="showModal()" class="fixed inset-0 z-20 w-full h-full bg-gray-800 bg-opacity-75">
        </div>
<!--        inline-block  -->
        <main class="flex flex-col items-center justify-center w-full h-full">
            <transition name="fade-up-down">
                <div v-show="show_modal" class="z-30 flex items-center modal-wrapper">
                    <div class="relative flex-row max-w-md max-h-screen mx-auto bg-white rounded shadow-lg modal xl:max-w-5xl lg:max-w-5xl md:max-w-2xl">

                        <div class="p-5 bg-gray-300 rounded-t modal-header">
                            <h2 class="text-2xl text-gray-800 text-indent"> <span>Magali GREINER </span></h2>
                        </div>

                        <div class="w-full h-full p-5 overflow-y-auto text-justify text-gray-700 modal-body">
                            <p class="py-1 tracking-wide text-indent">
                                Inscrit au Barreau de Paris depuis janvier 2014.
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                                Master Droit des Affaires, Droit de l’innovation, de la communication et de la Culture (Université de Sceaux).
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                                Maitre Magali GREINER, spécialisée en propriété intellectuelle et nouvelles technologies, dispose aujourd’hui d’une expertise particulière en droit des marques, dessins et modèles et en droit d’auteur.
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                                Du fait de sa collaboration avec des cabinets spécialisés en droit des affaires et des personnes, Maître Magali GREINER a pu développer un savoir-faire particulier en droit de la responsabilité civile des professionnels du droit, en droit pénal, en droit du travail, et en matière de réparation du dommage corporel.
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                              Egalement, soucieuse et impliquée dans la promotion du bien-être animal, Maître Magali GREINER est membre de la Commission Droit de l’Animal du Barreau de Paris, et de l’association Avocats & Droits de l’Animal.
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                              Enfin, Maitre Magali GREINER préconise le recours à des modes alternatifs de résolution des litiges (négociation, médiation, conciliation) avant d’envisager un traitement judiciaire des dossiers.
                            </p>
                        </div>
                        <div class="px-5 py-3 text-right modal-footer border0-t">
                            <button class="px-5 py-2 text-gray-800 cursor-pointer focus:outline-none" @click="showModal()">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </main>
      </div>
    </transition>

    <div @click="showModal()" class="mobile-modal lg:hidden">
      <!-- <h2 class="py-2 text-2xl font-medium text-center text-gray-300 hover:text-gray-400">Marc Pantaloni</h2><br> -->
      <h2 class="px-2 py-2 mb-2 text-4xl font-medium text-center text-gray-700 cursor-pointer hover:text-gray-800 lg:hidden"><span>Magali GREINER</span> </h2>
      <div class="py-2 line-1 lg:hidden"></div>

      <div class="w-full my-4 lg:hidden" data-scroll>
        <img
          src="~assets/img/compress/livres2.jpg"
          alt="Magali"
          class="h-auto max-w-full mx-auto sm:mx-0"
        />
      </div>

      <ul class="px-8 py-2 mx-auto text-lg italic tracking-wide text-justify list-disc list-inside lg:hidden" data-scroll>
          <li class="py-2 not-italic">Inscrit au Barreau de Paris depuis janvier 2014.</li>
          <li class="py-2">Master Droit des Affaires, Droit de l’innovation, de la communication et de la Culture (Université de Sceaux).</li>
      </ul>
      <p class="px-4 py-3 mx-auto text-lg tracking-wide text-justify lg:hidden text-indent" data-scroll>
        Maitre Magali GREINER, spécialisée en propriété intellectuelle et nouvelles technologies, dispose aujourd’hui d’une expertise particulière en droit des marques, dessins et modèles et en droit d’auteur.
      </p>
      <p class="px-4 py-3 mx-auto text-lg tracking-wide text-justify lg:hidden text-indent" data-scroll>
        Du fait de sa collaboration avec des cabinets spécialisés en droit des affaires et des personnes, Maître Magali GREINER a pu développer un savoir-faire particulier en droit de la responsabilité civile des professionnels du droit, en droit pénal, en droit du travail, et en matière de réparation du dommage corporel.
      </p>
      <p class="px-4 py-3 mx-auto text-lg tracking-wide text-justify lg:hidden text-indent" data-scroll>
        Egalement, soucieuse et impliquée dans la promotion du bien-être animal, Maître Magali GREINER est membre de la Commission Droit de l’Animal du Barreau de Paris, et de l’association Avocats &amp; Droits de l’Animal.
      </p>
      <p class="px-4 py-3 mx-auto text-lg tracking-wide text-justify lg:hidden text-indent" data-scroll>
          Enfin, Maitre Magali GREINER préconise le recours à des modes alternatifs de résolution des litiges (négociation, médiation, conciliation) avant d’envisager un traitement judiciaire des dossiers.
      </p>
    </div>
  </div>
</div>
</template>

<script>
import ScrollOut from "scroll-out"
export default {
  data(){
    return{
      show_modal: false,
    }
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .2
    });
  },
  destroyed() {
    this.so.teardown();
  },
  methods:{
    showModal(){
      if(this.show_modal){
        //stop screen scrolling
        document.getElementsByTagName("html")[0].classList.remove('overflow-y-hidden');
        this.show_modal = false;
      }else{
        document.getElementsByTagName("html")[0].classList.add('overflow-y-hidden');
        this.show_modal = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

[data-scroll] {
  transition: all 1.5s;
}

[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
[data-scroll="out"] {
  opacity: 0;
  transform: translateX(50px);
}

.modal-body{
  max-height: 500px;
}
.bg-gray-800-opacity{
  background-color: #2D374850;
}
@media screen and (max-width: 768px){
  .modal-body {
      max-height: 400px;
  }
}

/* animation for vue transition tag */

.fade-up-down-enter-active {
  transition: all 0.4s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active{
    -webkit-transition: opacity 2s;
    transition: opacity .4s;

}
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}

$color:#FFDF00;

h2, h5 {
  span {
    background-image: linear-gradient(
      transparent calc(65% - 5px),
      darken($color, 1%) 5px,
    );
    background-size: 0;
    background-repeat: no-repeat;
    display: inline;
    transition: 0.7s ease;
  }

  &:hover {
    span {
      background-size: 100%;
    }
  }
}

</style>
