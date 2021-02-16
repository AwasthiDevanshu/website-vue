<template>
<div>
    <CRow class="choose-us d-flex justify-content-center text-center">
      <CCol col="12">
        <h2> Testimonial</h2>
      </CCol>
    </CRow>
     <CRow class="choose-us d-flex justify-content-center text-center">
      <CCol col="12">
        <swiper ref="mySwiper" :options="swiperOptions">
          <template v-for="testimonial in testimonials">
            <swiper-slide>
              <CCard>
                <CCardImg :src="testimonial.image"> </CCardImg>
                <CCardBody>
                  <CCardHeader>{{ testimonial.name }}</CCardHeader>
                  {{ testimonial.text }}</CCardBody
                >
              </CCard>
            </swiper-slide>
          </template>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </CCol>
    </CRow>
</div>

</template>

<script>
import config from "../constants/config";
export default {
  name: "carrousel",
  title: "3D Coverflow effect",
  data() {
    return {
      testimonials: config.testimonials,
      swiperOptions: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
      },
      // Some Swiper option/callback...
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss" >


.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    text-align: center;
    font-weight: bold;
    font-size: 2rem * 2;
    background-color: #2c8dfb;
    background-position: center;
    background-size: cover;
    color: white;
  }

  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: white;
    }
  }
}
</style>

