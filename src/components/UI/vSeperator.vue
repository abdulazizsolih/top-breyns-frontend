<template>
  <span :class="direction + '-separator'"></span>
</template>

<script>
export default {
  name: 'v-separator',
  props: {
    direction: {
      type: String,
      require: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-separator {
    display: block;
    min-height: 100%;
    width: 1px;
    background: $bg-gray-3;
  }
  .h-separator {
    display: block;
    height: 1px;
    min-width: 100%;
    background: $bg-gray-3;
  }
</style>
