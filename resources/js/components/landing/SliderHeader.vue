<template>
<div>
  <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class="img-bg d-flex justify-content-center align-items-center" style="background-image: url('/images/sliderheader/slider1.jpg')">
         <div class="text-white">
          <h1 >Paginas Web de Alta Calidad</h1>
          <h2>Adatamos a tu Exigencias</h2>
         </div>
        </swiper-slide>
        <swiper-slide class="img-bg d-flex justify-content-center align-items-center" style="background-image: url('/images/sliderheader/slider2.jpg')">
         <div class="text-white">
          <h1 >Paginas Web de Alta Calidad</h1>
          <h2>Adatamos a tu Exigencias</h2>
         </div>
        </swiper-slide>
        <swiper-slide class="img-bg d-flex justify-content-center align-items-center" style="background-image: url('/images/sliderheader/slider3.jpg')">
         <div class="text-white">
          <h1 >Paginas Web de Alta Calidad</h1>
          <h2>Adatamos a tu Exigencias</h2>
         </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</div>
</template>

<script>
  export default {
    name: 'SliderHeader',
    data() {
      return {
        swiperOption: {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
              el: '.swiper-pagination'
            },
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                480: {
                slidesPerView: 1,
                spaceBetween: 10
                },
                768: {
                slidesPerView: 1,
                spaceBetween: 20
                },
                992: {
                slidesPerView: 1,
                spaceBetween: 30
                }
            }
        }
      }
    }
  }
</script>

<style>
.img-bg {
  width: 100%;
  height: 500px;
  object-fit: fill;
  background-position: center center;
  background-size:cover;
  }
</style>
