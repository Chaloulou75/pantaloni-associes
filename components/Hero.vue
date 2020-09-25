<template>
    <div class="hero">
      <Navigation />
      <div class="flex items-center justify-center h-screen mx-auto">
        <h1 class="text-4xl font-semibold text-center text-black transform -translate-y-24 md:text-5xl">
          Pantaloni & Associés
          <span id="subtitulo" class="block px-4 mt-4 font-normal text-center">
            - Avocats à la cour -
          </span>
        </h1>
      </div>

    </div>

</template>
<script>
export default {

}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Open+Sans:600,300');
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');

* {
	margin: 0;
	padding: 0;
}
.hero {
  height: 100vh;
  width: 100vw;
	background: linear-gradient(45deg, rgba(255,175,189,.7), rgba(100,216,243,.7), rgba(234,236,198,.7), rgba(245,146,176,.7), rgba(52,219,216,.7)) 0 0 / 1000% no-repeat, url("~assets/img/compress/palaisj.jpg") 0 0 / cover no-repeat;
	-webkit-animation: gradientAnimation 30s ease infinite;
  animation: gradientAnimation 30s ease infinite;
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

.img-hover-zoom {
  //height: 300px; /* Modify this according to your need */
  overflow: hidden; /* Removing this will break the effects */
}

/* Slow-motion Zoom Container */
.img-hover-zoom--slowmo img {
  transform-origin: 50% 65%;
  transition: transform 5s, filter 3s ease-in-out;
  filter: brightness(150%);
}

/* The Transformation */
.img-hover-zoom--slowmo:hover img {
  filter: brightness(100%);
  transform: scale(3);
}

</style>
