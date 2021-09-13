<template>
  <div class="form-control-wrap">
    <input :type="type" :class="'form-control form-control-' + size + ' ' + variant" :placeholder="placeholder" :value="modelValue">
    <div class="right-action" v-if="icon" @click="iconClick">
      <m-icon size="{{ size === 'lg' ? '22' : '20' }}">{{ icon }}</m-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-input',
  props: {
    modelValue: {
      type: [String, Number],
    },
    size: {
      type: String,
      default: 'md',
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    variant: {
      type: String,
      default: ''
    },
    icon: {
      type: String
    },
    iconClick: {
      type: () => ({}),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>