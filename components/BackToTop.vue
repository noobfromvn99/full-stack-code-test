<!-- Back to top button to scroll back top
 -->
<template>
  <a
    id="back-to-top"
    href="#"
    class="back-to-top"
    role="button"
    @click="topFunction()"
  >
    <font-awesome-icon icon="arrow-up" />
  </a>
</template>

<script>
export default {
  methods: {
    topFunction() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
  },
}
</script>

<style scoped>
#back-to-top {
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 20px;
  border: none;
  outline: none;
  color: black;
  cursor: pointer;
  margin: 10px;
}
</style>
