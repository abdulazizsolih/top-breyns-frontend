<template>
  <div class="accordion-item" :class="active ? 'active' : ''">
    <span class="anim-circle"></span>
    <div class="item-head anim-click" @mousedown.capture="collapseItem($event)">
      {{ title }}
      <m-icon size="28">expand_more</m-icon>
    </div>
    <div class="item-body label-1">
      <slot></slot>
    </div>
    <v-separator direction="h"></v-separator>
  </div>
</template>

<script>
export default {
  name: 'v-accordion-item',
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    collapseItem(el) {
      const item = el.target.closest('.accordion-item')
      if (item.classList.contains('active')) {
        item.classList.remove('active')
      } else {
        item.classList.add('active')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion-item {
  background: transparent;
  position: relative;
  overflow: hidden;

  .item-head {
    display: flex;
    justify-content: space-between;
    @extend .par-1;
    @extend .semibold;
    padding: 22px 0;
    cursor: pointer;

    span {
      transition: 0.3s ease-in-out;
    }
  }
  .item-body {
    transition: max-height 0.3s ease-in-out;
    padding-right: 140px;
    overflow: hidden;
    max-height: 0;

    p:last-child {
      margin-bottom: 24px;
    }
  }

  .anim-circle {
    width: 0;
    height: 0;
    background: $bg-gray-6;
    filter: blur(80px);
    transition: 0.1s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  &:active {
    .anim-circle {
      width: 800px;
      height: 800px;
    }
  }

  &:last-child {
    .h-separator {
      opacity: 0;
    }
  }

}
.active {
  .item-head {
    span {
      transform: rotate(-180deg);
    }
  }
  .item-body {
    max-height: 500px;
  }
}

@media (max-width: 768px) {
  .accordion-item {

    .item-head {
      padding: 18px 0;
    }
    .item-body {
      padding-right: 0px;
    }
  }
}
</style>