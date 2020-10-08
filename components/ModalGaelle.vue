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
                            <h5 class="text-2xl text-gray-800 text-indent"><span>Gaëlle GOUGUET </span></h5>
                        </div>
                        <div class="w-full h-full p-5 overflow-y-auto text-justify text-gray-700 modal-body">
                            <p class="py-1 tracking-wide text-indent">
                              Titulaire d’un Master II « carrières judiciaires », Gaëlle GOUGUET est avocate au Barreau de Paris depuis 2010.</p>
                            <p class="py-1 tracking-wide text-indent">
                              Après avoir exercé dans des cabinets généralistes avec une dominante en droit de la construction, Gaëlle GOUGUET a rejoint le cabinet PANTALONI pour y poursuivre son activité.</p>
                            <p class="py-1 tracking-wide text-indent">
                              Disposant d’une bonne expertise acquise dans le domaine de la construction, elle intervient, France entière et notamment dans le grand Ouest, pour le compte de l’ensemble des acteurs de cette branche (<span class="italic">entreprises – artisans - promoteurs-institutionnels</span>) tant en conseil que devant les juridictions.
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                              En outre, elle a développé une compétence accrue dans le contentieux assurantiel, au titre de la garantie décennale et de la responsabilité civile professionnelle, mais aussi de l’assurance Dommages Ouvrage.
                            </p>
                            <p class="py-1 tracking-wide text-indent">
                              Son domaine d’intervention s’étend enfin aux problématiques plus généralistes du droit de la responsabilité touchant les particuliers.
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

    <div @click="showModal()">

      <h2 class="hidden py-2 mb-2 text-5xl font-medium text-center text-gray-700 cursor-pointer hover:text-gray-800 lg:block"> <span > Gaëlle GOUGUET </span> </h2>
      <div class="hidden py-2 line-1 lg:block"></div>

      <ul class="px-8 py-2 mx-auto text-lg italic tracking-wide text-justify list-disc list-inside">
          <li class="py-2">Titulaire d’un Master II « carrières judiciaires », Gaëlle GOUGUET est avocate au Barreau de Paris depuis 2010.</li>
      </ul>
      <ul class="px-8 py-2 mx-auto text-lg tracking-wide text-justify list-inside">
        <li class="py-2 text-indent">
        Après avoir exercé dans des cabinets généralistes avec une dominante en droit de la construction, Gaëlle GOUGUET a rejoint le cabinet PANTALONI pour y poursuivre son activité.
        </li>
        <li class="py-2 text-indent">
        Disposant d’une bonne expertise acquise dans le domaine de la construction, elle intervient, France entière et notamment dans le grand Ouest, pour le compte de l’ensemble des acteurs de cette branche (<span class="italic">entreprises – artisans - promoteurs-institutionnels</span>) tant en conseil que devant les juridictions.
        </li>
        <li class="py-2 text-indent">
        En outre, elle a développé une compétence accrue dans le contentieux assurantiel, au titre de la garantie décennale et de la responsabilité civile professionnelle, mais aussi de l’assurance Dommages Ouvrage.
        </li>
        <li class="py-2 text-indent">
        Son domaine d’intervention s’étend enfin aux problématiques plus généralistes du droit de la responsabilité touchant les particuliers.
        </li>
      </ul>
      <div class="hidden my-4 line-1 lg:block"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      show_modal: false,
    }
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
