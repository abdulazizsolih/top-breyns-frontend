<template>
  <button :class="`btn btn-${icon ? 'i-' : ''}${size} btn-${variant} anim-click`">
    <m-icon :size="iconSize" v-if="icon"><slot></slot></m-icon>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    size: {
      type: String,
      default: 'md'
    },
    variant: {
      type: String,
      default: 'secondary'
    },
    icon: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-content: center;
  justify-content: center;
  gap: 8px;
}
</style>