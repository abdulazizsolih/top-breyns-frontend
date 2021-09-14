<template>
  <div class="headline">
    <v-separator direction="h"></v-separator>
    <h4 class="bold"><slot></slot></h4>
  </div>
</template>

<script>
export default {
  name: "v-headline"
}
</script>

<style lang="scss" scoped>
.headline {
  margin-bottom: 40px;

  h4 {
    padding-top: 24px;
    padding-bottom: 8px;
  }
}

@media (max-width: 768px) {
  .headline {
    margin-bottom: 12px;

    h4 {
      padding-top: 16px;
    }
  }
}
</style>