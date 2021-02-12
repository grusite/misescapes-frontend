<template>
    <div class="flex flex-wrap -mx-4 p-6">
      <div v-for="game in games" :key="game.id" class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <NuxtLink :to="`/game/${game.id}`" prefetch><GameCard :game="game" /></NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
      required: true,
    },
  },
}
</script>