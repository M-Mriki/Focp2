<template>
  <div class="actualites">
    <div class="actualites__top">
      <h2>Actualités</h2>
      <button class="btn">
        Toute l'actualité
      </button>
    </div>
    <div v-swiper:mySwiper="swiperNew" class="swiperWrap">
       <div class="paginationNew">
                    <div
                      slot="button-prev"
                      class="swiper-button-prev new-button-prev"
                    />
                    <div
                      slot="button-next"
                      class="swiper-button-next new-button-next"
                    />
                  </div>
      <div class="swiper-wrapper">
        <div v-for="(item, index) in items" :key="index" class="swiper-slide">
          <div class="actualites__new">
            <MOneNews :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MOneNews from '../Molecules/M-OneNews.vue'
export default {
  components: { MOneNews },
  data () {
    return {
      items: [
        {
          imgSrc: require('@/assets/images/act1.png'),
          alt: 'ESS',
          formation: 'ESS',
          title:
            'Programme Mourafaka : Un partenariat en faveur de 600 coopératives marocaines',
          jour: '07',
          mois: 'Juil'
        },
        {
          imgSrc: require('@/assets/images/act2.png'),
          alt: 'ESS',
          formation: 'ESS',
          title:
            'Programme Mourafaka : Un partenariat en faveur de 600 coopératives marocaines',
          jour: '21',
          mois: 'Juin'
        },
        {
          imgSrc: require('@/assets/images/act3.png'),
          alt: 'ESS',
          formation: 'ESS',
          title:
            'Programme Mourafaka : Un partenariat en faveur de 600 coopératives marocaines',
          jour: '03',
          mois: 'Août'
        },
        {
          imgSrc: require('@/assets/images/act1.png'),
          alt: 'ESS',
          formation: 'ESS',
          title:
            'Programme Mourafaka : Un partenariat en faveur de 600 coopératives marocaines',
          jour: '03',
          mois: 'Août'
        }
      ],
      swiperNew: {
        slidesPerView: 3.7,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // },
        navigation: {
          nextEl: '.new-button-next',
          prevEl: '.new-button-prev'
        },
        breakpoints: {
          1366: {
            slidesPerView: 3.7,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 10
          },
          640: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.actualites {
  /* display: flex; */
  padding-bottom: 30px;
    padding-top: 80px;
  overflow: hidden;
  align-items: center;
  /* height: 500px; */
  margin-left: 100px;
  flex-wrap: wrap;
  &__top {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    margin-bottom: 25px;
    h2{
        &::before{
            left: 11px;
    bottom: 55px;
        }
    }
    button {
      background-color: $coloract;
      margin-right: 190px;
    }
  }
    .paginationNew{
      display: none;
    }
  .swiper-wrapper{
      cursor: pointer;
  .swiper-slide {
    max-width: 370px;
    }
  }
    &__new {
      /* display: flex; */
      z-index: 1;
      gap: 20px;
    }
    &__item {
      max-width: 370px;
    }
    &__images {
      img {
        border-radius: 10px;
      }
    }
    &__info {
      display: flex;
      margin-top: 15px;
      gap: 25px;
    }
    &__dates {
      text-align: center;
      .jour {
        font-family: "ITC Avant Garde Gothic Std Book";
        color: #ea3c44;
        font-size: 25px;
        font-weight: bold;
      }
      .mois {
        font-family: "ITC Avant Garde Gothic Std";
        font-weight: normal;
        color: #ea3c44;
        font-size: 19px;
      }
    }
    &__detais {
      position: relative;
      .tag {
        font-family: "ITC Avant Garde Gothic Std Book";
        color: #ea3c44;
        font-size: 16px;
        font-weight: normal;
      }
      h3 {
        font-size: 15px;
        color: $firstColor;
        font-family: "ITC Avant Garde Gothic Std";
        font-weight: normal;
        line-height: 1.7;
      }
      &::before {
        content: "";
        position: absolute;
        width: 2px;
        height: 45%;
        background: #ffffff5c;
        top: 7px;
        left: -15px;
      }
    }
}
/*********************************** MOBILE ******************************/
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .actualites{
    margin-left: 0;
    padding-bottom: 80px;
    padding-inline: 10px;
    &__top{
      h2{
        font-size: 20px;
        &::before{
          bottom: 35px;
        }
      }
      button{
        margin-right: 0;
        font-size: 13px;
      }
    }
          .paginationNew{
            display: block;
    position: absolute;
    bottom: 40px;
    z-index: 2;
    left: 10px;
    .new-button-next{
      left: 60px;
      &::after{
      color:$colorCiel !important;
    }
    }
      .new-button-prev,.new-button-next{
    background: #ececec;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    &::after{
      color:$colorOrange;
    font-size: 12px;
    font-weight: bold;
    }
            }
      }
        &__detais {
      h3 {
        font-size: 15px;
        line-height: 1.5;
      }
    }
    .swiper-wrapper{
      .swiper-slide{
          max-width: initial;
      }
    }
  }
}
</style>
