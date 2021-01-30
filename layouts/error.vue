<template>
  <ErrorPage v-if="error.statusCode === 404" :title="notFountTitle" :message="notFoundMessage" />
  <ErrorPage v-else :title="generalTitle" :message="error.message" />
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
      title: 'Error Page',
    }
  },
  data() {
    return {
      notFountTitle: 'We are sorry, Page not found!',
      notFoundMessage:
        'The page you are looking for might have been removed had its name changed or is temporarily unavailable.',
      generalTitle: 'We are sorry, there is an Error!',
      generalMessage: 'You have experience an error. Try it again in a few minutes.',
    }
  },
}
</script>
