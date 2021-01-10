<template>
  <div>
    <img :src="game.image" style="width:200px"> <br/>
        {{ game.id }} <br/>
        {{ game.location }} <br/>
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
}
</script>