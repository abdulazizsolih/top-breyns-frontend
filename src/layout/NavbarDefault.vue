<template>
  <nav class="d-none d-md-flex">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-md-3 col-lg-2 brand">
          <router-link to="/"><img src="@/assets/images/logo.svg" alt="TopBreyns Logo"></router-link>
        </div>
        <div class="col-sm-6 col-md-7 col-lg-8 links">
          <a href="" class="nav-link d-none d-lg-flex">Все Курсы</a>
          <a href="" class="nav-link d-none d-lg-flex">Скоро</a>
          <a href="" class="nav-link d-none d-lg-flex">Сотрудничество</a>
          <a href="" class="nav-link d-none d-xl-flex">О Нас</a>
          <span class="nav-link search p-0" @click="$router.push('/search')">
            <m-icon size="22">search</m-icon>
            <input class="search-input form-control" @focus="search_focus = true" @blur="search_focus = false" type="search" :placeholder="search_focus ? 'Поиск...' : 'Поиск'">
          </span>
        </div>
        <div class="col-sm-2 actions text-end">
          <v-button size="sm" variant="secondary">Войти</v-button>
        </div>
      </div>
    </div>
  </nav>

  <nav class="d-flex d-md-none">
    <div class="container d-flex justify-content-between">
      <div class="menu-toggle">
        <v-button size="lg" icon>menu</v-button>
      </div>
      <div class="brand">
        <router-link to="/"><img src="@/assets/images/logo.svg" alt="TopBreyns Logo"></router-link>
      </div>
      <div class="search-toggle">
        <v-button size="lg" icon>search</v-button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar-default',
  data() {
    return {
      search_focus: false
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  background: $bg-primary;
  height: 80px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;

  .brand {
    margin-bottom: 2px;
  }

  .links {
    display: flex;
    gap: 16px;
    .nav-link {
      @extend .btn-text-sm;
      @extend .semibold;
      @extend .anim-click;
      white-space: nowrap;
      color: $label-1;
      height: 36px;
      padding: 8px 16px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover, &:focus, &:focus-visible {
        background: $bg-gray-3;
      }

      &:focus-visible {
        outline: none;
      }
    }
  }

  .search {
    span {
      padding-left: 16px;
    }
    .search-input {
      @extend .btn-text-sm;
      @extend .semibold;
      border-radius: 8px;
      margin-left: -38px;
      padding-left: 44px;
      padding-right: 16px;
      background: transparent;
      border: none !important;
      height: 100%;

      &::placeholder {
        color: $label-1;
        opacity: 1;
      }

      &:active, &:focus {
        outline: none;
        box-shadow: none;
        border: none;
        background: $bg-gray-3;

        &::placeholder {
          color: $label-1;
          opacity: 0.4;
        }
      }

      &::-webkit-search-cancel-button {
        display: none;
      }
    }
  }

  .menu-toggle, .search-toggle {
    color: $label-1;

    button {
      background: transparent;
      border: 0;

      &:hover, &:active, &:focus {
        background: transparent;
        border: 0;
      }
    }
  }
}

@media (max-width: 992px) {
  .search {
    width: 100%;
    .search-input {
      width: 100%;
      background: $bg-gray-3;
    }
  }
}

@media (max-width: 768px) {
  nav {
    height: 72px;
    padding-bottom: 16px;

    .brand {
      display: flex;
      align-items: flex-end;
    }
  }
}
</style>