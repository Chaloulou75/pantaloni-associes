<template>
    <div class="bg-center bg-no-repeat bg-cover hero" id="herotop">
      <!-- <Navigation /> -->
      <div class="flex flex-col items-center justify-center min-h-screen mx-auto">
        <div class="mt-auto mb-8 space-y-6 lg:mb-24">
          <h1 id="titulo" class="text-4xl font-bold text-center text-gray-900 lg:text-7xl" data-scroll><span>Pantaloni &amp; Associés</span></h1>
          <h2 id="subtitulo" class="text-3xl font-semibold text-center text-gray-800 lg:text-6xl" data-scroll><span> - Avocats à la Cour -</span></h2>
        </div>
        <!---menu -->
        <div class="mt-8 mb-20 mr-auto md:my-16 desktop-menu md:mx-auto">
          <ul class="flex flex-col justify-around space-y-3 text-lg font-bold uppercase lg:text-2xl md:space-x-8 md:space-y-0 md:flex-row">
            <li class="px-3 tracking-wide text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2">
              <scroll-link href="#cabinet">Le cabinet</scroll-link>
            </li>
            <li class="relative px-3 tracking-wide text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2">
              <scroll-link href="#equipe">L'equipe</scroll-link>
            </li>
            <li class="px-3 tracking-wide text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2">
              <scroll-link href="#expertise">Expertise</scroll-link>
            </li>
            <li class="px-3 tracking-wide text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-black hover:translate-x-2">
              <scroll-link href="#contact">Contact</scroll-link>
            </li>
          </ul>
        </div><!-- end menu -->

      </div>
    </div>

</template>
<script>
import ScrollOut from "scroll-out"

export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
    });
  },
  destroyed() {
    this.so.teardown();
  }

}
</script>

<style lang="scss">

* {
	margin: 0;
	padding: 0;
}

.hero {
  height: 100vh;
  max-width: 100%;
	background: linear-gradient(45deg, rgba(255,175,189,.7), rgba(100,216,243,.7), rgba(234,236,198,.7), rgba(245,146,176,.7), rgba(52,219,216,.7)) 0 0 / 1000% no-repeat, url("~assets/img/compress/palaisj.jpg") 0 0 / cover no-repeat;
	-webkit-animation: gradientAnimation 25s ease infinite;
  animation: gradientAnimation 25s ease infinite;
}
@-webkit-keyframes gradientAnimation {
	0%   { background-position: 0% 30%, 0 0;}
	50%  { background-position: 100% 70%, 0 0;}
	100% { background-position: 0% 30%, 0 0;}
}
@keyframes gradientAnimation {
	0%   { background-position: 0% 30%, 0 0;}
	50%  { background-position: 100% 70%, 0 0;}
	100% { background-position: 0% 30%, 0 0;}
}

$color:#FFDF00;

h1, h2 {
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

a {
  font-family: 'Cormorant Garamond', 'font-sans', sans-serif;
}

.fade-enter-active, .fade-leave-active {
    transition: all .4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-7px);
}

a {
  background-image: linear-gradient(
      transparent calc(65% - 5px),
      darken($color, 1%) 5px,
  );
  background-size: 0;
  background-repeat: no-repeat;
  transition: 0.5s ease;

  &:hover {
    background-size: 100%;
  }
}

#titulo, #subtitulo, [data-scroll] {
  transition: all 2s;
}

#titulo, #titulo[data-scroll="in"] {
  opacity: 1;
  transform: translateY(0);
}

#titulo, #titulo[data-scroll="out"] {
  opacity: 0;
  transform: translateY(-65px);
}

#subtitulo, #subtitulo[data-scroll="in"] {
  opacity: 1;
  transform: translateY(0);
}

#subtitulo, #subtitulo[data-scroll="out"] {
  opacity: 0;
  transform: translateY(-105px);
}

</style>
