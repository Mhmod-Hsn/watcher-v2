<template>
  <div
    class="loading-card d-flex align-items-center justify-content-center"
    :style="{height: height}"
  >
    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "150px",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
