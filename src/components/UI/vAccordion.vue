<template>
  <div class="accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-accordion',
}
</script>

<style lang="scss" scoped>
.accordion {
  margin-top: 24px;
}

@media (max-width: 768px) {
  .accordion {
    margin-top: 12px;
  }
}
</style>