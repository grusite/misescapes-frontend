export default function ({ $axios }, inject) {
  inject('dataApi', {
    getAllGames,
    getGameById,
  })

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
