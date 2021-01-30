export default function (context, inject) {
  inject('apiDto', {
    toGameDto,
    toErrorDto,
  })

  function toGameDto(game) {
    const {
      id,
      name,
      city,
      description,
      duration,
      narrowImage,
      maxPrice,
      minPrice,
      maxGamer,
      minGamer,
      _company,
    } = game

    const gameDto = {
      id,
      name,
      location: city.name,
      address: _company.address,
      description,
      duration,
      image: narrowImage.translations,
      maxPrice,
      minPrice,
      maxGamer,
      minGamer,
      companyName: _company.name,
      companyRating: _company.rating,
      rating: _company.rating,
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
