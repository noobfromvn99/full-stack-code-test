<template>
  <div class="flex-container">
    <Weathers :weathers="weathers" />
  </div>
</template>

<script>
import WeatherApi from '@/api/WeatherApi'
import Weathers from '@/components/Weather/Weathers'
export default {
  components: {
    Weathers,
  },
  data() {
    return {
      weathers: [],
    }
  },
  async created() {
    const weatherApi = new WeatherApi()
    this.weathers = await weatherApi.getAllWeather()
  },
}
</script>

<style>
.flex-container {
  display: flex;
}
</style>
