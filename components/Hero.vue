<template>
    <div class="hero" id="herotop">
      <Navigation />
      <div class="flex items-center justify-center h-screen mx-auto ">
        <h1 class="relative text-4xl font-semibold text-center transform -translate-y-24 md:text-5xl">
          <span>Pantaloni &amp; Associés</span>
          <span id="subtitulo" class="block px-4 mt-4 font-normal text-center text-gray-800">
            - Avocats à la Cour -
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

* {
	margin: 0;
	padding: 0;
}

.hero {
  height: 100vh;
	background: linear-gradient(45deg, rgba(255,175,189,.7), rgba(100,216,243,.7), rgba(234,236,198,.7), rgba(245,146,176,.7), rgba(52,219,216,.7)) 0 0 / 1000% no-repeat, url("~assets/img/compress/palaisj.jpg") 0 0 / cover no-repeat;
	-webkit-animation: gradientAnimation 40s ease infinite;
  animation: gradientAnimation 40s ease infinite;
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

h1 {
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
