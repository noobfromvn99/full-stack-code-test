<template>
  <div>
    <div class="title-nav">
      <h1 class="title">weather</h1>
    </div>
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'
export default {
  components: {
    Navigation,
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  margin: 0;
}

.title-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  background-color: #204254;
}

@media only screen and (min-width: 768px) {
  .button--grey {
    color: green;
    background-color: #35495e;
  }
}

@media only screen and (min-width: 1024px) {
  .button--grey {
    color: red;
    background-color: #35495e;
  }
}
</style>
