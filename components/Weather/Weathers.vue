<template>
  <div class="container">
    <div v-for="weather in weathers" :key="weather._venueID">
      <Weather :weather="weather" />
    </div>
  </div>
</template>

<script>
import Weather from '@/components/Weather/Weather'
export default {
  components: {
    Weather,
  },
  props: {
    weathers: {
      type: Array,
      required: true,
    },
  },
}
</script>
