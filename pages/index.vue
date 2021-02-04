<template>
  <div class="min-w-screen mx-auto">
    <SearchBar />
    <GamesSection :games="games"/>
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
        games: gamesDto.slice(1, 10),
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
