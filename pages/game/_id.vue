<template>
  <div>
    <nuxt-link to="/">Home page</nuxt-link><br/> <br/>
    <div style="display: flex">
      <img
        alt="game image"
        :src="game.image"
        width="200"
        height="150"
      />
    </div>
    {{ game.id }} <br /> <br/>
    <short-text :text="game.description" :target="150" /><br/> <br/>
    <div style="height:800px;width:800px" ref="map"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $dataApi, $apiDto, error }) {
    const gameResponse = await $dataApi.getGameById(params.id)
    if(gameResponse.ok === false){
      const errorDto = $apiDto.toErrorDto(gameResponse)
      return error({
        statusCode: errorDto.statusCode,
        message: errorDto.message,
      })
    }

    return {
      game: $apiDto.toGameDto(gameResponse),
    }
  },
  head() {
    return {
      title: this.game.id,
    }
  },
  mounted(){
    this.$map.showMap(this.$refs.map, this.game.lat, this.game.lng)
  },
}
</script>
