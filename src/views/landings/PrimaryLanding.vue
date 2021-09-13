<template>
  <section id="hero">
    <div class="bg-art">
      <img src="@/assets/images/bg-art.svg" alt="TopBreyns">
    </div>
    <div class="container">
      <div class="col-xl-10 mx-auto">
        <div class="col-xl-8 col-lg-10 col-md-12">
          <h1 :class="window <= 576 ? 'h3' : ''">Десятилетия <span class="yeseva-font">опыта <br> профессионалов</span>
            <br> своей сферы</h1>
        </div>
        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-6">
          <form id="form-1" class="full-width-form">
            <div class="form-group">
              <v-input type="phone" size="lg" placeholder="+998 (__) ___ __ __"></v-input>
              <v-button size="lg" variant="primary">Присоединиться</v-button>
            </div>
            <div class="btn-social-group">
              <v-button size="lg" class="btn-google"><img src="@/assets/images/google-icon.svg" alt=""> Google
              </v-button>
              <v-button size="lg" class="btn-facebook"><img src="@/assets/images/facebook-icon.svg" alt=""> Facebook
              </v-button>
            </div>
            <p class="caption text-center label-3 regular">Предоставляя свой телефон, вы соглашаетесь
              с нашими <a href="">Условиями использования</a> и <a href="">Политикой конфиденциальности</a>.</p>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section id="info">
    <div class="bg-curve d-none d-xxl-block">
      <img src="@/assets/images/curve.svg" alt="TopBreyns">
    </div>
    <div class="container">
      <div class="col-xl-10 mx-auto">
        <div class="col-xxl-7 col-xl-8 col-lg-10 col-md-12">
          <h2 class="h4 regular">Курсы от мастеров в своей сфере <br class="d-md-block d-none">
            от ведения бизнеса до самых тонких <br class="d-md-block d-none">
            профессий мира.</h2>
          <div class="pros">
            <div>
              <h3 class="bold">569</h3>
              <p class="subheadline medium">Сутеднтов</p>
            </div>
            <v-separator direction="v"></v-separator>
            <div>
              <h3 class="bold">15+</h3>
              <p class="subheadline medium d-flex align-items-center gap-2">Лет опыта
                <m-icon class="label-3" size="20">help_outline</m-icon>
              </p>
            </div>
            <v-separator direction="v" class="d-sm-block d-none"></v-separator>
            <div class="d-sm-block d-none">
              <h3 class="bold">569</h3>
              <p class="subheadline medium">Сутеднтов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="courses">
    <div class="container">
      <div class="col-xl-10 mx-auto">
        <div class="headline">
          <v-separator direction="h"></v-separator>
          <h4 class="bold">Наши курсы</h4>
        </div>
        <div class="course-card-lg">
          <img src="@/assets/images/robert-reffikin-curve.png" alt="Rober Reffikin" class="curve">
          <div class="row">
            <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-5 p-0 avatar">
              <img src="@/assets/images/robert-reffikin.png" alt="Rober Reffikin" class="desktop">
              <img src="@/assets/images/robert-reffikin-mob.png" alt="Rober Reffikin" class="mob">
            </div>
            <div class="col-xxl-5 col-xl-4 col-lg-4 col-md-5 info">
              <h2 class="abril-fatface-font">Rober Reffikin</h2>
              <p class="subheadline label-2">32 урока · 4 часа · <a href="">Программа</a></p>
              <p>Как генеральный директор <br>
                и основатель Compass Роберт <br>
                Реффкин использовал.</p>
              <div class="actions">
                <v-button icon size="lg">play_arrow</v-button>
              </div>
            </div>
          </div>
        </div>
        <div class="course-card-lg course-card-right">
          <img src="@/assets/images/daniel-pink-curve.png" alt="Rober Reffikin" class="curve">
          <div class="row">
            <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-5 p-0 avatar">
              <img src="@/assets/images/daniel-pink.png" alt="Rober Reffikin" class="desktop">
              <img src="@/assets/images/daniel-pink-mob.png" alt="Rober Reffikin" class="mob">
            </div>
            <div class="col-xxl-5 col-xl-4 col-lg-4 col-md-5 info">
              <h2 class="roboto-slab-font">Daniel Pink</h2>
              <p class="subheadline label-2">32 урока · 4 часа · <a href="">Программа</a></p>
              <p>Как генеральный директор <br>
                и основатель Compass Роберт <br>
                Реффкин использовал.</p>
              <div class="actions">
                <v-button icon size="lg">play_arrow</v-button>
                <v-button class="d-none d-md-block" icon iconSize="24" size="lg">notifications</v-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="testimonials">
    <div class="container">
      <div class="col-xl-10 mx-auto">
        <div class="headline">
          <v-separator direction="h"></v-separator>
          <h4 class="bold">Отзывы</h4>
        </div>
      </div>
      <v-testimonials>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
      </v-testimonials>
      <v-testimonials>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
        <v-testimonial src="img-1.png" name="Мадина Турабекова">“I would also like to say thank you to all your staff.
          No matter where you go, Course is the coolest"
        </v-testimonial>
      </v-testimonials>
    </div>
  </section>
  <section id="faq">
    <div class="container">
      <div class="col-xl-10 mx-auto">
        <v-separator direction="h"></v-separator>
        <div class="row">
          <div class="col-lg-3">
            <h4 class="bold">Часто <br>
              задаваемые <br>
              вопросы</h4>
          </div>
          <div class="col-lg-8">
            <v-accordion>
              <v-accordion-item title="Что такое TopBreyns?" active>
                <p class="regular">TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                  специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                  образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                  наших менторов. </p>
                <p class="regular">На данный момент платформа только начал свою работу, но уже сейчас вы можете
                  приобрести курс по ведению менеджмента в больших компания от ведущего специалиста
                  <a href="">Алишера Исаева</a>.</p>
              </v-accordion-item>
              <v-accordion-item title="Что вы получите при покупке курса?">
                <p class="regular">TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                  специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                  образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                  наших менторов. </p>
                <p class="regular">На данный момент платформа только начал свою работу, но уже сейчас вы можете
                  приобрести курс по ведению менеджмента в больших компания от ведущего специалиста
                  <a href="">Алишера Исаева</a>.</p>
              </v-accordion-item>
              <v-accordion-item title="Как оплатить курс?">
                <p class="regular">TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                  специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                  образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                  наших менторов. </p>
                <p class="regular">На данный момент платформа только начал свою работу, но уже сейчас вы можете
                  приобрести курс по ведению менеджмента в больших компания от ведущего специалиста
                  <a href="">Алишера Исаева</a>.</p>
              </v-accordion-item>
              <v-accordion-item title="Как вернуть деньги за курс?">
                <p class="regular">TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                  специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                  образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                  наших менторов. </p>
                <p class="regular">На данный момент платформа только начал свою работу, но уже сейчас вы можете
                  приобрести курс по ведению менеджмента в больших компания от ведущего специалиста
                  <a href="">Алишера Исаева</a>.</p>
              </v-accordion-item>
              <v-accordion-item title="Как смотреть курс?">
                <p class="regular">TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                  специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                  образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                  наших менторов. </p>
                <p class="regular">На данный момент платформа только начал свою работу, но уже сейчас вы можете
                  приобрести курс по ведению менеджмента в больших компания от ведущего специалиста
                  <a href="">Алишера Исаева</a>.</p>
              </v-accordion-item>
              <v-accordion-item title="Где задать свой вопрос?">
                <p class="regular">TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                  специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                  образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                  наших менторов. </p>
                <p class="regular">На данный момент платформа только начал свою работу, но уже сейчас вы можете
                  приобрести курс по ведению менеджмента в больших компания от ведущего специалиста
                  <a href="">Алишера Исаева</a>.</p>
              </v-accordion-item>
            </v-accordion>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer-default></footer-default>

  <!-- И все элементы должны быть внутри, а не тут, только динамичные элементы могут быть тут -->
  <!--  <v-hero-section></v-hero-section>-->
  <!--  <v-info-section></v-info-section>-->
  <!--  <v-courses-section></v-courses-section>-->
  <!--  <v-testimonials-section></v-testimonials-section>-->
</template>

<script>
export default {
  data() {
    return {
      window: window.innerWidth,
    }
  },
}

</script>

<style lang="scss" scoped>

#hero {
  margin-top: 96px;
  position: relative;
  z-index: 1;

  .bg-art {
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: -80px;
    z-index: -1;
  }

  #form-1 {
    margin-top: 96px;
  }
}

.form-group {
  > * {
    margin-bottom: 16px;
  }
}

.full-width-form {
  .form-group > * {
    display: block;
    width: 100%;
  }

  .caption {
    margin-top: 24px;
  }
}

.btn-social-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 40px;

  .btn-google {
    background: #fff;
    color: rgba(#000, 0.8);
    border: none !important;

    &:hover, &:active, &:focus {
      background: #fff;
      box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.08) !important;
      color: rgba(#000, 0.8);
    }
  }

  .btn-facebook {
    background: #2E4F8B;
    color: #fff;
    border: none !important;

    &:hover, &:active, &:focus {
      background: #2E4F8B;
      box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.08) !important;
      color: #fff;
    }
  }
}

#info {
  margin-top: 104px;
  position: relative;
  z-index: 2;

  .pros {
    display: flex;
    gap: 32px;
    margin-top: 32px;

    > div {
      padding: 16px 0;
      text-align: center;
    }
  }


  .bg-curve {
    position: absolute;
    top: -125px;
    z-index: -1;
  }
}

#courses {
  margin-top: 156px;
}

.headline {
  margin-bottom: 40px;

  h4 {
    padding-top: 24px;
    padding-bottom: 8px;
  }
}

.course-card-lg {
  background: $bg-tertiary;
  border: 1px solid $bg-gray-6;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  height: 540px;
  margin-bottom: 24px;

  .avatar {
    height: 540px;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;

    img {
      height: 100%;
    }

    .mob {
      display: none;
    }
  }

  .info {
    padding-top: 128px;
    z-index: 1;

    h2 {
      margin-bottom: 12px;
    }

    .subheadline {
      margin-bottom: 20px;
    }
  }

  .actions {
    margin-top: 40px;
    display: flex;
    gap: 16px;
  }

  .curve {
    position: absolute;
    right: 0;
    height: 100%;
  }
}

.course-card-right {
  .info, .avatar {
    @extend .offset-md-1;
  }
}

#testimonials {
  margin-top: 96px;
  width: 100vw;
  overflow: hidden;
}

#faq {
  margin-top: 80px;

  h4 {
    padding-top: 24px;
  }
}

@media (min-width: 768px) {
  .course-card-right {
    .avatar {
      order: 2;
      justify-content: flex-start;
    }

    .curve {
      left: 0;
    }
  }
}

@media (max-width: 998px) {
  #hero {
    #form-1 {
      margin-top: 56px;
    }

    .bg-art {
      top: -128px;
    }
  }
}

@media (max-width: 768px) {
  #hero {
    .bg-art {
      top: -166px;
    }
  }
  section {
    margin-top: 40px !important;
  }
  .headline {
    margin-bottom: 12px;

    h4 {
      padding-top: 16px;
    }
  }
  .course-card-lg {
    height: auto;

    .avatar {
      justify-content: center;
      height: 276px;
      overflow: hidden;
      border-bottom-left-radius: 88px;
      margin-left: 12px;

      .mob {
        display: block;
        width: 100%;
        height: fit-content;
      }

      .desktop {
        display: none;
      }
    }

    .curve {
      display: none;
    }

    .info {
      position: relative;
      padding: 32px 24px 24px 36px;

      .actions {
        display: inline-block;
        margin: 0;
        position: absolute;
        right: 24px;
        top: -24px;
      }
    }
  }
}

@media (max-width: 576px) {
  #hero {
    margin-top: 24px;

    h1 {
      text-align: center;
    }
  }

  #info {
    h2 {
      text-align: center;
    }

    .pros {
      justify-content: center;
    }
  }
}
</style>