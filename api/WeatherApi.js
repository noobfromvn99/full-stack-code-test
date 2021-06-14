const axios = require('axios')
const BaseApi = require('./BaseApi.js').default
class WeatherApi extends BaseApi {
  constructor() {
    super('weather.json')
  }

  async getAllWeather() {
    const response = await axios.get(this.path)

    return response.data.data
  }

  async getWeather(id) {
    const response = await axios.get(`${this.path}/${id}`)
    return response.data.data
  }

  async getWeatherByTemperature() {
    const response = await axios.get(this.path)
    return this.clean(response.data.data).sort(
      this.GetSortOrder('_weatherTemp')
    )
  }

  async getWeatherAlphabetically() {
    const response = await axios.get(this.path)
    return response.data.data
  }

  async getWeatherByLastUpdated() {
    const response = await axios.get(this.path)
    return response.data.data
  }

  GetSortOrder(prop) {
    return function (a, b) {
      if (parseInt(a[prop], 10) > parseInt(b[prop], 10)) {
        return -1
      } else if (parseInt(a[prop], 10) < parseInt(b[prop], 10)) {
        return 1
      }
      return 0
    }
  }

  clean(arr) {
    for (let i = 0; i < arr.length; i++) {
      // eslint-disable-next-line no-prototype-builtins
      if (!arr[i].hasOwnProperty('_weatherTemp')) {
        arr.splice(i, 1)
      }
    }
    return arr
  }
}
export default WeatherApi
