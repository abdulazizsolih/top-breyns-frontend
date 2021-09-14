<template>
  <div class="course-card-lg">
    <img src="@/assets/images/robert-reffikin-curve.png" alt="Rober Reffikin" class="curve">
    <div class="row">
      <div class="col-xxl-5 col-xl-6 col-lg-6 col-md-5 p-0 avatar">
        <a href=""><img src="@/assets/images/robert-reffikin.png" alt="Rober Reffikin" class="desktop"></a>
        <a href=""><img src="@/assets/images/robert-reffikin-mob.png" alt="Rober Reffikin" class="mob"></a>
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
</template>

<script>
export default {
  name: "v-course-card",
  props: {
    courseId: {
      type: Number,
      required: true
    },
  }
  // Next we have to get the course's info from db by id instead of sharing whole info
}
</script>

<style lang="scss" scoped>
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

@media (max-width: 768px) {
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
</style>