<template>
  <div>
    <div v-for="game in games" :key="game.id" style="float: left; margin: 10px">
      <nuxt-link :to="`/game/${game.id}`" prefetch><game-card :game="game"/></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $dataApi, $apiDto, error }) {
    try{
      const allGamesResponse = await $dataApi.getAllGames()
      if(allGamesResponse.ok === false){
        const errorDto = $apiDto.toErrorDto(allGamesResponse)
        return error({
          statusCode: errorDto.statusCode,
          message: errorDto.message,
        })
    }
      const gamesDto = allGamesResponse.map((game)=>{return $apiDto.toGameDto(game)})
      return {
        games: gamesDto.slice(0,5),
      }
    } catch (err){
      console.log("erroooooooor: ", err.data)
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
