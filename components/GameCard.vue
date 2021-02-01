<template>
  <div class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
    <div class="relative pb-48 overflow-hidden">
      <img class="absolute inset-0 h-full w-full object-cover" :src="game.image" alt="" />
    </div>
    <div class="p-4">
      <span
        class="inline-block px-2 py-1 leading-none bg-yellow-200 text-yellow-800 rounded-full font-semibold uppercase tracking-wide text-xs"
        >{{ game.companyName }}</span
      >
      <h2 class="mt-2 mb-2 font-bold">{{ game.name }}</h2>
      <p class="text-sm">
        <ShortText :text="game.description" :target="150" />
      </p>
      <div class="mt-3 flex items-center">
        <span class="text-sm font-semibold">Precio</span>&nbsp;<span class="font-bold text-xl"
          >{{ game.minPrice }}-{{ game.maxPrice }}</span
        >&nbsp;<span class="text-sm font-semibold">€</span>
      </div>
    </div>

    <div class="p-4 border-t border-b text-xs text-gray-700">
      <span class="flex items-center mb-1">
        <i class="material-icons text-gray-900 mr-2"> query_builder </i>
        {{ game.duration }}
      </span>
      <span class="flex items-center">
        <i class="material-icons text-gray-900 mr-2"> contact_mail </i>
        {{ game.address }}
      </span>
    </div>
    <div class="p-4 flex items-center text-sm text-gray-600">
      <!-- Estrella llena: text-yellow-500; estrella vacia: text-gray-400 -->
      <svg
        v-for="index in 5"
        :key="index"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 fill-current text-yellow-500"
      >
        <path
          d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
        ></path>
      </svg>
      <span class="ml-2">{{ game.rating }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      starts: [1, 2, 3, 4, 5],
    }
  },
}
</script>

<style>
.c-card img {
  transition: transform 0.3s ease-in-out;
}

.c-card img:hover {
  transform: scale(1.05);
}
</style>
