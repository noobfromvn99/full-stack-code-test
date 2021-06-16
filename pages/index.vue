<template>
  <div>
    <!-- sort navigation bar-->
    <header>
      <ul>
        <li id="a-z" class="active" @click="changeData">A-Z</li>
        <li id="temp" @click="changeData">Temperature</li>
        <li id="lupdate" @click="changeData">Last updated</li>
      </ul>
    </header>

    <!-- Refresh button-->
    <div class="refresh">
      <font-awesome-icon icon="sync" style="cursor: pointer" @click="refresh" />
    </div>
    <p v-if="$fetchState.pending">fetching Weather Data...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>

    <!-- weather list-->
    <div v-else class="flex-container">
      <Weathers :weathers="weathers" />
    </div>

    <!-- pop up filter box (hidden by default)-->
    <div id="filter-box" class="filter-box">
      <div class="container">
        <header>
          <ul>
            <li id="country" class="active" @click="listCountry">By Country</li>
            <li id="condition" @click="listCondition">By Weather Condition</li>
          </ul>
        </header>
        <div id="countryList">
          <div v-for="country in countries" :key="country.id">
            <div class="p-4" @click="filterCountry(country)">
              {{ country }}<span style="float: right">></span>
            </div>
            <hr />
          </div>
        </div>
        <div id="weatherList">
          <div
            v-for="weatherCondition in weatherConditions"
            :key="weatherCondition.id"
          >
            <div class="p-4" @click="filterWeatherCondition(weatherCondition)">
              {{ weatherCondition }}<span style="float: right">></span>
            </div>
            <hr />
          </div>
        </div>
        <div class="p-4" @click="closeFilter">Close Filter</div>
      </div>
    </div>

    <!-- open filter box button-->
    <font-awesome-icon class="filter" icon="bars" @click="openFilter" />

    <!-- back to top button-->
    <BackToTop />
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop'
import WeatherApi from '@/api/WeatherApi'
import Weathers from '@/components/Weather/Weathers'
export default {
  components: {
    Weathers,
    BackToTop,
  },
  data() {
    return {
      weathers: [],
      countries: [],
      weatherConditions: [],
      dataType: 'a-z', // keep track of what sorted weathers to display (a-z surburb by default)
    }
  },
  async fetch() {
    const weatherApi = new WeatherApi()
    this.countries = await weatherApi.getCountry()
    this.weatherConditions = await weatherApi.getWeatherCondition()
    if (this.dataType === 'a-z') {
      this.weathers = await weatherApi.getAllWeather()
    } else if (this.dataType === 'temp') {
      this.weathers = await weatherApi.getWeatherByTemperature()
    } else if (this.dataType === 'lupdate') {
      this.weathers = await weatherApi.getWeatherByLastUpdated()
    }
  },
  methods: {
    // reload fetching data
    refresh() {
      this.$fetch()
    },

    // filter methods
    /* compare value passing from click element with the array query
     compare dataType variable to know what sorted array is displaying */
    async filterCountry(country) {
      this.closeFilter()
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
      const weatherApi = new WeatherApi()
      this.weathers = await weatherApi.filterCountry(country, this.dataType)
    },
    async filterWeatherCondition(condition) {
      this.closeFilter()
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
      const weatherApi = new WeatherApi()
      this.weathers = await weatherApi.filterWeatherCondition(
        condition,
        this.dataType
      )
    },

    changeData() {
      this.dataType = event.target.id
      this.changeActive()
      this.$fetch()
    },
    changeActive() {
      for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
        document.getElementsByTagName('li')[i].classList.remove('active')
      }
      document.getElementById(event.target.id).classList.add('active')
    },
    openFilter() {
      document.getElementById('filter-box').style.display = 'block'
    },
    closeFilter() {
      document.getElementById('filter-box').style.display = 'none'
    },
    listCountry() {
      document.getElementById('countryList').style.display = 'block'
      document.getElementById('weatherList').style.display = 'none'
      this.changeActive()
    },
    listCondition() {
      document.getElementById('countryList').style.display = 'none'
      document.getElementById('weatherList').style.display = 'block'
      this.changeActive()
    },
  },
}
</script>

<style>
.flex-container {
  display: flex;
}
header ul {
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 17px;
  border-bottom: 1px solid gray;
  height: inherit;
  margin: 0;
  padding: 0;
}
li {
  padding: 14px 16px;
  cursor: pointer;
}

/* a {
  padding: 0 16px;
  text-decoration: none;
  height: inherit;
  color: #cfcfcf;
} */
ul li:hover {
  border-bottom: 3px solid #c5eff1;
}

.active {
  border-bottom: 3px solid #c5eff1;
  color: #c4c4c4;
  font-weight: 500;
}
.filter {
  position: fixed;
  bottom: 0;
  font-size: 20px;
  outline: none;
  color: black;
  cursor: pointer;
  margin: 10px;
}
.filter-box {
  position: fixed;
  bottom: 0;
  display: none;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  z-index: 2;
}
#weatherList {
  display: none;
}
.refresh {
  text-align: center;
  margin-top: 20px;
}
</style>
