export default function ({ $axios, $auth }, inject) {
  inject('dataApi', {
    getAllGames,
    getGameById,
    registerUser,
  })

  async function registerUser(userPayload) {
    try {
      return await $axios.$post('/auth/signup', userPayload)
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  async function getAllGames() {
    try {
      return await $axios.$get('/games/all')
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  async function getGameById(gameId) {
    try {
      return await $axios.$get(`/games/${gameId}`)
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  function getErrorResponse(error) {
    return {
      ok: false,
      ...error,
    }
  }
}
