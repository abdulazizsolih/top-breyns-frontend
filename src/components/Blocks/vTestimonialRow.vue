<template>
  <div class="testimonials">
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
  </div>
</template>

<script>
export default {
  name: 'v-testimonial-row',
  props: {
    courseId: {
      type: Number,
      required: false
    }
  }
  // Get testimonials by course id or just new testimonials and share data in v-testimonial component
}
</script>

<style lang="scss" scoped>
.testimonials {
  display: flex;
  gap: 24px;
  margin-top: 24px;
  animation: testimonials-moving-left 30s linear infinite;
}

.testimonials:last-child {
  animation: testimonials-moving-right 30s linear infinite;
}
.testimonials-wrap {

}

@keyframes testimonials-moving-left {
  0% {
    transform: translateX(-500px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(-500px);
  }
}
@keyframes testimonials-moving-right {
  0% {
    transform: translateX(-1000px);
  }
  50% {
    transform: translateX(-500px);
  }
  100% {
    transform: translateX(-1000px);
  }
}

@media (max-width: 576px) {
  @keyframes testimonials-moving-left {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-1000px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes testimonials-moving-right {
    0% {
      transform: translateX(-1000px);
    }
    50% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-1000px);
    }
  }
}
</style>