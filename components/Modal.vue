<template>
<div class="fixed inset-0 z-10 overflow-y-auto" @click="$emit('close')">
  <div class="flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-900 opacity-100"></div>
    </div>
    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

    <div class="inline-block overflow-hidden align-middle transition-all transform rounded-sm shadow-xl sm:my-8 sm:max-w-3xl sm:w-full" role="dialog" aria-modal="true">
      <div>
        <img loading="lazy"
        :alt="image.name"
        :src="image.src"
        class="object-contain w-full h-auto">
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ['image'],
}
</script>
