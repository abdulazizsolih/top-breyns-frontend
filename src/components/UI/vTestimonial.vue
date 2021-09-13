<template>
  <div class="col-xl-4 col-lg-6 col-md-10 col-12 testimonial">
    <div class="avatar">
      <img :src="require(`@/assets/images/` + src)" alt="Profile Image">
    </div>
    <div class="text">
      <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.54479 14.5924L6.54477 14.5924L6.54281 14.5964C6.27654 15.141 5.70125 15.5 5.072 15.5C3.84117 15.5 3.04794 14.2099 3.59821 13.1216L3.59921 13.1196L5.24721 9.82361L5.60902 9.1H4.8H1.6C0.996142 9.1 0.5 8.60386 0.5 8V1.6C0.5 0.996142 0.996142 0.5 1.6 0.5H8C8.60386 0.5 9.1 0.996142 9.1 1.6V8.848C9.1 9.26688 9.00585 9.67027 8.81679 10.0484L6.54479 14.5924ZM22.5448 14.5924L22.5448 14.5924L22.5428 14.5964C22.2765 15.141 21.7013 15.5 21.072 15.5C19.8412 15.5 19.0479 14.2099 19.5982 13.1216L19.5992 13.1196L21.2472 9.82361L21.609 9.1H20.8H17.6C16.9961 9.1 16.5 8.60386 16.5 8V1.6C16.5 0.996142 16.9961 0.5 17.6 0.5H24C24.6039 0.5 25.1 0.996142 25.1 1.6V8.848C25.1 9.26688 25.0058 9.67027 24.8168 10.0484L22.5448 14.5924Z" stroke="white" stroke-opacity="0.24"/>
      </svg>
      <p><slot></slot></p>
      <p class="semibold mb-0">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-testimonial',
  props: {
     src: {
       type: String,
       required: true
     },
    name: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.testimonial {
  display: flex;
  gap: 32px;
  padding: 32px 40px 40px 32px;
  border-radius: 10px;
  background: $bg-tertiary;
  border: 1px solid $bg-gray-6;

  .avatar {
    min-width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    svg {
      margin-bottom: 24px;
      margin-top: 4px;
    }
  }
}

@media (max-width: 576px) {
  .testimonial {
    padding: 20px 20px 32px 20px;
    gap: 20px;

    .avatar {
      min-width: 48px;
      height: 48px;
    }
  }
}
</style>