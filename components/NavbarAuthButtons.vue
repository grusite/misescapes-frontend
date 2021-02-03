<template>
  <div
    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
  >
    <NuxtLink
      :to="{ path: `/login` }"
      class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      Login</NuxtLink
    >
    <NuxtLink
      :to="{ path: `/register` }"
      class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >Registro</NuxtLink
    >
  </div>
</template>
