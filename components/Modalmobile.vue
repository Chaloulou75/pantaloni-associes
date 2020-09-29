<template>
<div class="relative ">
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
                            <h5 class="text-2xl text-gray-700">Prénom Nom</h5>
                        </div>

                        <div class="w-full h-full p-5 overflow-y-auto modal-body">
                            <p class="text-justify text-gray-700">
                                cilis omnis nam illum maiores, porro velit deserunt neque.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, voluptates eveniet labore dolorum molestiae, modi saepe fugiat minima repudiandae repellendus obcaecati voluptatibus ab tenetur recusandae eius quos at maiores atque consectetur facilis! Nisi fuga
                            </p>
                        </div>
                        <div class="px-5 py-3 text-right modal-footer border0-t">
                            <button class="px-5 py-2 text-gray-800" @click="showModal()">
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
      <h2 class="py-2 mb-2 text-5xl font-medium text-center text-gray-700 hover:text-gray-600 lg:hidden">Prenom Nom</h2>
      <div class="py-2 line-1 lg:hidden"></div>

      <div class="w-full my-4 lg:hidden">
        <img
          src="~assets/img/compress/livres2.jpg"
          alt="plume"
          class="mx-auto sm:mx-0"
        />
      </div>

      <p class="p-2 mx-auto text-lg tracking-wide lg:hidden">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quo
        blanditiis sequi possimus, nesciunt corrupti nam iusto vero omnis
        repudiandae cumque ipsam. Ab repudiandae sed distinctio illum vero,
        incidunt facere.
      </p>
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

</style>
