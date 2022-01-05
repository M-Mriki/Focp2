<template>
  <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
    <div class="swiper-wrapper">
      <div v-for="banner in banners" :key="banner" class="swiper-slide">
        <!-- <img :src="banner.imgSrc"> -->
        <picture>
          <source
            :srcset="banner.imgSrc"
            media="(min-width: 1000px)"
          >
          <source
            :srcset="banner.imgMobi"
            media="(max-width: 768px)"
          >
          <img
            :srcset="banner.imgSrc"
            alt="Baby Sleeping"
          >
        </picture>
        <div class="slider-actualite">
          <div class="content-slider">
            <div class="title">
              <h1>
                <span>{{ banner.titleOne }}</span>{{ banner.titleTwo }}
              </h1>
            </div>
            <div class="subtitle">
              <h3>{{ banner.sousTitle }}</h3>
              <h4>{{ renderBullet }}</h4>
            </div>
            <div class="decouvrir">
              <button class="btn btn-decovrir">
                Découvrir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-nav">
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-bullets"
      />
      <div slot="scrollbar" class="swiper-scrollbar" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      banners: [
        {
          imgSrc: require('@/assets/images/slide1.png'),
          imgMobi: require('@/assets/images/mobileslide.png'),
          titleOne: 'Une Fondation ',
          titleTwo: 'Humaine ',
          sousTitle: 'en perpétuel mouvement'
        },
        {
          imgSrc: require('@/assets/images/slide1.png'),
          imgMobi: require('@/assets/images/mobileslide.png'),
          titleOne: 'Une Fondation ',
          titleTwo: 'Humaine ',
          sousTitle: 'en perpétuel mouvement'
        }
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet (index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">
            <span>
            ${(index + 1).toString().padStart(2, '0')}
            </span>
            </span>`
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.swiperWrap {
  /* border: 1px solid red; */
  .pagination-nav {
    position: absolute;
    right: 0;
    width: 20rem;
    .swiper-pagination {
      display: flex;
      max-width: 230px;
      .swiper-pagination-bullet {
        background: #fff;
        width: 100%;
        height: 2px;
        border-radius: 0;
        color: #fff;
        padding: 0;
        margin: 0;
        text-align: right;
        position: relative;
        &.swiper-pagination-bullet-active {
          border-radius: 5px;
        }
        span {
          position: absolute;
          bottom: 0px;
          visibility: hidden;
          left: 0;
        }
        &:first-of-type,
        &:last-of-type {
          span {
            visibility: visible;
          }
        }
        &:last-of-type {
          span{
            left: auto;
            right: 0;
          }
        }
      }
    }
  }
  .swiper-slide {
    /* border: 1px solid green; */
    img {
      width: 100%;
      height: 100%;
    }
    .content-slider{
        position: absolute;
        z-index: 4;
        left: 30%;
        top: 40%;
        transform: translate(-50%, -50%);
        max-width: 600px;
        padding-left: 55px;
      .title {
        /* position: absolute;
        z-index: 4;
        left: 30%;
        top: 40%;
        transform: translate(-50%, -50%);
        max-width: 600px;
        padding-left: 55px; */
        h1 {
          font-family: "ITC Avant Garde Gothic Std";
          font-weight: bold;
          font-size: 65px;
          color: $colorblakc;
          position: relative;
          span {
            padding-left: 35px;
          }
        }
        &::after {
          position: absolute;
          content: "";
          background: url("~/assets/images/icon-after-title.svg") no-repeat center;
          background-size: contain;
          height: 100px;
          width: 140px;
          /* display: flex; */
          right: 65px;
          top: 68px;
        }
        &::before {
          position: absolute;
          content: "";
          background: url("~/assets/images/icon-before-title.svg") no-repeat
            center;
          background-size: contain;
          height: 100px;
          width: 85px;
          left: 0px;
          top: -11px;
          margin-right: 34px;
        }
      }
      .subtitle {
        /* position: absolute;
        z-index: 4;
        left: 27%;
        top: 51%;
        transform: translate(-50%, -50%); */
        h3 {
          font-size: 26px;
          font-family: "ITC Avant Garde Gothic Std";
          font-weight: normal;
          color: #4e4e4e;
          position: relative;
          padding-left: 25px;
          &::before {
            position: absolute;
            content: "";
            background: url("~/assets/images/icon-orange-before.svg") no-repeat
              center;
            background-size: contain;
            height: 100px;
            width: 15px;
            top: -30px;
            left: 3px;
          }
        }
      }
      .btn-decovrir{
            margin-top: 20px;
        background-color: $colorgren;
      }
    }

  }
}

/*****************************MObile*************************************/
@media (max-width: 320px) {
   .swiperWrap{
  .swiper-slide {
    .content-slider{
      padding-left: 207px !important;
      .title {
        width: 353px !important;
        h1{
           font-size: 30px !important;
        }

        &::before{
         width: 45px !important;
    left: -448px !important;
    top: -36px !important;
        }
        &::after{
          width: 90px !important;
    right: 112px !important;
    top: 2px !important;
        }
      }
       .subtitle{
        h3{
          font-size: 21px !important;
          &::before{
            width: 12px !important;
    top: -38px !important;
          }
        }
      }
    }
  }
    .pagination-nav {
      position: absolute;
      right: -40px;
      width: 20rem;
      /* margin: auto; */
      }
  }

}
@media (max-width: 575.98px) {
  .swiperWrap{
  .swiper-slide {
    .content-slider{
      padding-left: 207px !important;
      .title {
        width: 440px;
        h1{
            font-size: 45px;
        }

        &::before{
          width: 60px;
          left: -245px;
          top: -27px;
        }
        &::after{
          width: 113px;
    right: 65px;
    top: 30px;
        }
      }

    }
  }
  }
}
</style>
