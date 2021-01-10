export default function (context, inject) {
  inject('apiDto', {
    toGameDto,
    toErrorDto,
  })

  function toGameDto(game) {
    const { id, city, description, narrowImage, _company } = game

    const gameDto = {
      id,
      location: city.name,
      description,
      image: narrowImage.translations,
      lat: _company.latitude,
      lng: _company.longitude,
    }
    return gameDto
  }

  function toErrorDto(error) {
    const erorrData = error.response.data

    const errorDto = {
      ok: false,
      statusCode: erorrData.statusCode,
      message: erorrData.message,
    }
    return errorDto
  }
}
