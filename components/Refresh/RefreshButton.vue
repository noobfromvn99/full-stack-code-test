<template>
  <button class="btn btn-primary" @click="refresh">Refresh</button>
</template>
<script>
export default {
  methods: {
    refresh() {
      this.$fetch()
    },
  },
}
</script>
