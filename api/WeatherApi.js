const axios = require('axios')
const BaseApi = require('./BaseApi.js').default
class WeatherApi extends BaseApi {
  constructor() {
    super('weather.json')
  }

  // get all weather by Name ASC
  async getAllWeather() {
    const response = await axios.get(this.path)
    return response.data.data.sort(this.GetSortOrder('_name'))
  }

  // async getWeather(id) {
  //   const response = await axios.get(`${this.path}/${id}`)
  //   return response.data.data.sort(this.GetSortOrder('_name'))
  // }

  // get weather by temperature DESC
  async getWeatherByTemperature() {
    const response = await axios.get(this.path)
    return response.data.data.sort(function (a, b) {
      return parseInt(b._weatherTemp) - parseInt(a._weatherTemp)
    })
  }

  // get weather by lastest date
  async getWeatherByLastUpdated() {
    const response = await axios.get(this.path)
    return response.data.data.sort(function (a, b) {
      return parseInt(b._weatherLastUpdated) - parseInt(a._weatherLastUpdated)
    })
  }

  // get all unique countries in the list
  async getCountry() {
    const response = await axios.get(this.path)
    const country = response.data.data
    const countryArr = []
    for (let i = 0; i < country.length; i++) {
      if (country[i]._country._name !== undefined) {
        countryArr.push(country[i]._country._name)
      }
    }
    return countryArr.filter(
      (value, index) => countryArr.indexOf(value) === index
    )
  }

  // get all unique weather condition in the list
  async getWeatherCondition() {
    const response = await axios.get(this.path)
    const weatherCondition = response.data.data
    const weatherConditionArr = []
    for (let i = 0; i < weatherCondition.length; i++) {
      if (weatherCondition[i]._weatherCondition !== undefined) {
        weatherConditionArr.push(weatherCondition[i]._weatherCondition)
      }
    }
    return weatherConditionArr.filter(
      (value, index) => weatherConditionArr.indexOf(value) === index
    )
  }

  // check for current tab of sort to return correct weather array
  async checkDataType(dataType) {
    let weatherArr = []
    if (dataType === 'a-z') {
      weatherArr = await this.getAllWeather()
    } else if (dataType === 'temp') {
      weatherArr = await this.getWeatherByTemperature()
    } else if (dataType === 'lupdate') {
      weatherArr = await this.getWeatherByLastUpdated()
    }
    return weatherArr
  }

  // filter by country name
  async filterCountry(value, dataType) {
    const weatherArr = await this.checkDataType(dataType)
    const filteredArr = []
    for (let i = 0; i < weatherArr.length; i++) {
      if (
        weatherArr[i]._country._name === value &&
        weatherArr[i]._country._name !== undefined
      ) {
        filteredArr.push(weatherArr[i])
      }
    }
    return filteredArr
  }

  // filter by weather condition
  async filterWeatherCondition(value, dataType) {
    const weatherArr = await this.checkDataType(dataType)
    const filteredArr = []
    for (let i = 0; i < weatherArr.length; i++) {
      if (
        weatherArr[i]._weatherCondition === value &&
        weatherArr[i]._weatherCondition !== undefined
      ) {
        filteredArr.push(weatherArr[i])
      }
    }
    return filteredArr
  }

  // sort by property value ASC
  GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1
      } else if (a[prop] < b[prop]) {
        return -1
      }
      return 0
    }
  }

  // clean(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     // eslint-disable-next-line no-prototype-builtins
  //     if (!arr[i].hasOwnProperty('_weatherTemp')) {
  //       arr.splice(i, 1)
  //     }
  //   }
  //   return arr
  // }
}
export default WeatherApi
