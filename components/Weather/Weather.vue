<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-4 col-sm-12 col-xs-12">
        <div class="p-4">
          <div class="row">
            <div class="col">
              <h6 class="flex-grow-1">{{ weather._name }}</h6>
              <p class="my-1">
                <font-awesome-icon icon="wind" />
                <span> {{ weather._weatherWind }} </span>
              </p>
              <p class="my-1">
                <font-awesome-icon icon="tint" />
                <span> {{ weather._weatherHumidity }} </span>
              </p>
            </div>
            <div class="col container">
              <h1 class="font-weight-bold" style="color: #a7e7ea">
                {{ weather._weatherTemp }} <span>&#8451;</span>
              </h1>
              <h5 class="container small grey">
                Feel like {{ weather._weatherFeelsLike }} &#8451;
              </h5>
              <h6 class="container">{{ weather._weatherCondition }}</h6>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  components: {},
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
}
</script>
