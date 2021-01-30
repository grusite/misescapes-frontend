<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div v-for="game in games" :key="game.id" class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <NuxtLink :to="`/game/${game.id}`" prefetch><GameCard :game="game" /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $dataApi, $apiDto, error }) {
    try {
      const allGamesResponse = await $dataApi.getAllGames()
      if (allGamesResponse.ok === false) {
        const errorDto = $apiDto.toErrorDto(allGamesResponse)
        return error({
          statusCode: errorDto.statusCode,
          message: errorDto.message,
        })
      }
      const gamesDto = allGamesResponse.map((game) => {
        return $apiDto.toGameDto(game)
      })
      return {
        games: gamesDto.slice(2, 7),
      }
    } catch (err) {
      console.log('erroooooooor: ', err.data)
      error({
        statusCode: err.statusCode,
        message: err.message,
      })
    }
  },
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          content: 'This is a homepage!',
          hid: 'description',
        },
      ],
    }
  },
}
</script>

<style></style>
