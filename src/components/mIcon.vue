<template>
  <span class="material-icons" :style="{fontSize: size + 'px', userSelect: 'none'}"><slot></slot></span>
</template>

<script>
export default {
  name: 'm-icon',
  // The color of an icon have to be defined by its parent element
  props: ['size'],
}
</script>

<style lang="scss" scoped>

</style>