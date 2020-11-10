<template>
<div class="relative">
  <div class="flex items-center justify-center w-full h-full">
    <transition name="fade">

      <div v-show="show_modal" class="fixed inset-0 z-40">

<!--       background -->
        <div v-show="show_modal" @click="showModal()" class="fixed inset-0 z-20 w-full h-full bg-gray-800 opacity-75 bg-filter">
        </div>
<!--        inline-block  -->
        <main class="flex flex-col items-center justify-center w-full h-full">
            <transition name="fade-up-down">
                <div v-show="show_modal" class="z-30 flex items-center modal-wrapper">
                    <div class="relative flex-row max-w-md max-h-screen mx-auto bg-white rounded shadow-lg modal xl:max-w-5xl lg:max-w-5xl md:max-w-2xl">

                        <div class="p-5 bg-gray-300 rounded-t modal-header">
                            <h2 class="text-2xl text-gray-800 text-indent"><span>Sandrine NIVET-ABDOUN</span></h2>
                        </div>
                        <div class="w-full h-full p-5 overflow-y-auto text-justify text-gray-700 modal-body">
                            <p class="py-1 tracking-wide text-indent">
                                Titulaire d’un MASTER 2 Recherche, Sciences Sociales de la Justice, après un MASTER 1 de Droit des Affaires (Mention Justice et Procès).
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                                Juriste confirmée, Sandrine NIVET-ABDOUN a rejoint le Cabinet dès sa constitution.
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                                Elle assure une fonction de support et de coordination tant à l’égard des clients qu’auprès des juridictions.
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                                Elle est en outre en charge du bon suivi de l’exécution de l’ensemble des décisions judiciaires rendues.
                            </p>
                        </div>
                        <div class="px-5 py-3 text-right modal-footer ">
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

    <div @click="showModal()" data-scroll>

      <h2 class="hidden py-2 mb-2 text-5xl font-medium text-center text-gray-700 cursor-pointer hover:text-gray-800 lg:block"> <span >Sandrine NIVET-ABDOUN</span> </h2>
      <div class="hidden py-2 line-1 lg:block"></div>

      <ul class="px-8 py-2 mx-auto text-lg italic tracking-wide list-disc list-inside">
          <li class="py-2">Titulaire d’un MASTER 2 Recherche, Sciences Sociales de la Justice, après un MASTER 1 de Droit des Affaires (Mention Justice et Procès).</li>
      </ul>
      <ul class="px-8 py-2 mx-auto text-lg tracking-wide list-inside">
        <li class="py-2 text-indent">
        Juriste confirmée, Sandrine NIVET-ABDOUN a rejoint le Cabinet dès sa constitution.
        </li>
        <li class="py-2 text-indent">
        Elle assure une fonction de support et de coordination tant à l’égard des clients qu’auprès des juridictions.
        </li>
        <li class="py-2 text-indent">
        Elle est en outre en charge du bon suivi de l’exécution de l’ensemble des décisions judiciaires rendues.
        </li>
      </ul>
      <div class="hidden my-4 line-1 lg:block"></div>
    </div>
  </div>
</div>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  data(){
    return{
      show_modal: false,
    }
  },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .3
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
  transform: translateX(150px);
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
