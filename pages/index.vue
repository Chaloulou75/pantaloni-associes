<template>
  <div class="relative min-h-screen bg-gray-100 font-cormorant">
      <Hero />
      <LazyCabinet />
      <LazyEquipe />
      <LazyExpertise />
      <LazyContact />
      <LazyFooter />

      <visible when-hidden="#herotop">
        <div class="fixed bottom-0 right-0 z-20 mb-16 mr-6">
          <div class="p-2 bg-gray-400 border border-white rounded-full opacity-75 hover:opacity-100">
            <scroll-link href="#herotop" class="text-gray-800">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
            </scroll-link>
          </div>
        </div>
      </visible>

  </div>
</template>

<script>
export default {
}
</script>

