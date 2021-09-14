<template>
  <form class="full-width-form">
    <div class="form-group">
      <v-input type="phone" size="lg" placeholder="+998 (__) ___ __ __"></v-input>
      <v-button size="lg" variant="primary">Присоединиться</v-button>
    </div>
    <div class="btn-social-group" v-if="socials">
      <v-button size="lg" class="btn-google"><img src="@/assets/images/google-icon.svg" alt=""> Google
      </v-button>
      <v-button size="lg" class="btn-facebook"><img src="@/assets/images/facebook-icon.svg" alt=""> Facebook
      </v-button>
    </div>
    <p class="caption text-center label-3 regular">Предоставляя свой телефон, вы соглашаетесь
      с нашими <a href="">Условиями использования</a> и <a href="">Политикой конфиденциальности</a>.</p>
  </form>
</template>

<script>
export default {
  name: "v-form-sm",
  props: {
    socials: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-social-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 40px;

  .btn-google, .btn-facebook {
    border: none !important;
    white-space: nowrap;

    &:hover, &:active, &:focus {
      box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.08) !important;
    }
  }

  .btn-google {
    background: #fff;
    color: rgba(#000, 0.8);

    &:hover, &:active, &:focus {
      background: #fff;
      color: rgba(#000, 0.8);
    }
  }

  .btn-facebook {
    background: #2E4F8B;
    color: #fff;

    &:hover, &:active, &:focus {
      background: #2E4F8B;
      color: #fff;
    }
  }
}
</style>