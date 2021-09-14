<template>
  <!-- INTRO -->
  <div class="intro">
    <div class="container">
      <div class="actions d-none d-sm-flex">
        <v-button icon size="lg" iconSize="24">pause</v-button>
        <v-button icon size="lg" iconSize="24">volume_up</v-button>
      </div>
    </div>
    <video poster="@/assets/images/poster.png">
      <source src="https://www.youtube.com/embed/YuIJ3fL1-VQ" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <navbar-default></navbar-default>

  <!-- HERO -->
  <section id="hero">
    <div class="bg-art">
      <img src="@/assets/images/bg-art.svg" alt="TopBreyns">
    </div>
    <v-container>
      <div class="col-xl-8 col-lg-10 col-md-12">
        <h1 :class="window <= 576 ? 'h3' : ''">Десятилетия <span class="yeseva-font">опыта <br> профессионалов</span>
          <br> своей сферы</h1>
      </div>
      <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-6">
        <v-form-sm id="form-1" socials></v-form-sm>
      </div>
    </v-container>
  </section>

  <!-- INFO -->
  <section id="info">
    <div class="bg-curve d-none d-xxl-block">
      <img src="@/assets/images/curve.svg" alt="TopBreyns">
    </div>
    <v-container>
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
    </v-container>
  </section>

  <!-- COURSE -->
  <section id="courses">
    <v-container>
      <v-headline>Наши курсы</v-headline>
      <v-course-card course-id="2"></v-course-card>
      <v-course-card class="course-card-right" course-id="2"></v-course-card>
    </v-container>
  </section>

  <!-- TESTIMONIALS -->
  <section id="testimonials">
    <div class="container">
      <div class="col-xl-10 mx-auto">
        <v-headline>Отзывы</v-headline>
      </div>
      <v-testimonial-row></v-testimonial-row>
      <v-testimonial-row></v-testimonial-row>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq">
    <v-container>
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
              <p>TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                наших менторов. </p>
              <p>На данный момент платформа только начал свою работу, но уже сейчас вы можете
                приобрести курс по ведению менеджмента в больших компания от ведущего специалиста
                <a href="">Алишера Исаева</a>.</p>
            </v-accordion-item>
            <v-accordion-item title="Что вы получите при покупке курса?">
              <p>TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                наших менторов. </p>
              <p>На данный момент платформа только начал свою работу, но уже сейчас вы можете
                приобрести курс по ведению менеджмента в больших компания от ведущего специалиста
                <a href="">Алишера Исаева</a>.</p>
            </v-accordion-item>
            <v-accordion-item title="Как оплатить курс?">
              <p>TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                наших менторов. </p>
              <p>На данный момент платформа только начал свою работу, но уже сейчас вы можете
                приобрести курс по ведению менеджмента в больших компания от ведущего специалиста
                <a href="">Алишера Исаева</a>.</p>
            </v-accordion-item>
            <v-accordion-item title="Как вернуть деньги за курс?">
              <p>TopBreyns – это платформа с онлайн обучением по курсам от одних из лучших
                специолистов в своей сфере. TopBreyns сама снимает курсы и имеет свою команду монтажеров, таким
                образом мы гарантируем вам высокий уровень видео уроков и приятный и постепенный процесс обучения от
                наших менторов. </p>
              <p>На данный момент платформа только начал свою работу, но уже сейчас вы можете
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
    </v-container>
  </section>

  <!-- FOOTER -->
  <footer-default></footer-default>
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

.intro {
  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  .container {
    display: flex;
    justify-content: flex-end;

    .actions {
      position: absolute;
      z-index: 1;
      bottom: 32px;
      display: flex;
      gap: 16px;
    }
  }
}

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