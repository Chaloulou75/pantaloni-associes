<template>
<div class="pt-4 bg-gray-800 ">
   <div class="flex flex-col items-center justify-between w-full px-3 py-5 m-auto text-xs text-gray-200 lg:text-sm md:flex-row">
      <div >&copy; Pantaloni & Associés {{ new Date().getFullYear() }}. Tous droits réservés.</div>

      <div class="flex justify-between">
        <p class="pr-6">Developpeur Web: <a href="https://charles-jeandey.com" rel="noreferrer" target="_blank" class="px-1 text-gray-400 hover:text-gray-200"> Charles Jeandey</a></p>
        <NuxtLink to="/mentionslegales" class="hover:text-gray-300">Mentions légales</NuxtLink>
      </div>
   </div>
</div>
</template>
