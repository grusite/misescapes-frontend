<template>
  <div style="text-align: center">
    <img
      src="https://media1.tenor.com/images/99f00b32545bf5b5db8bf8ecbb7f0aec/tenor.gif?itemid=7971019"
      alt="error image"
    /><br /><br />
    <h1>Error!</h1>
    {{ error.message }} {{ error.statusCode }}
    <br /><br />
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: 'BIG PROBLEMS!',
    }
  },
}
</script>
