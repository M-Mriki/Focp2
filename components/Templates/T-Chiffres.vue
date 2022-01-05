<template>
  <b-container>
    <div class="chifres">
      <!-- <b-img v-bind="{src:imageAtrribut.src,alt:imageAtrribut.alt}" fluid /> -->
      <div class="chifres__content">
        <b-row>
          <b-col cols="12" md="12" lg="12" xl="4">
            <div class="left-chifre">
              <h2>Un engagement sans frontières</h2>
              <span>Répartition des projets en 2020</span>
            </div>
          </b-col>
          <b-col cols="12" md="12" lg="12" xl="8">
            <div class="right-chifre">
              <div v-if="isMobile" class="chifre__mobile">
                <div v-swiper:mySwiper="swiperChifre" class="swiperWrap">
                  <div class="paginationChifre">
                    <div
                      slot="button-prev"
                      class="swiper-button-prev chifre-button-prev"
                    />
                    <div
                      slot="button-next"
                      class="swiper-button-next chifre-button-next"
                    />
                  </div>
                  <div class="swiper-wrapper">
                    <div v-for="item in items" :key="item" class="swiper-slide">
                      <MOneChiffre :item="item" />
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="chifre__desktop">
                <b-row align-items-stretch class="row-content">
                  <b-col
                    v-for="item in items"
                    :key="item"
                    cols="6"
                    md="4"
                    lg="3"
                    xl="2"
                  >
                    <MOneChiffre :item="item" />
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import MOneChiffre from '../Molecules/M-OneChiffre.vue'
export default {
  components: { MOneChiffre },
  middleware: 'userAgent',
  data () {
    return {
      imageAtrribut: {
        src: require('@/assets/images/back-chifre.png'),
        alt: 'chiffres'
      },
      items: [
        {
          imgSrc: require('@/assets/images/chifre1.svg'),
          title: '350K',
          sousTitle: 'Bénéficiaires'
        },
        {
          imgSrc: require('@/assets/images/chifre2.svg'),
          title: '47%',
          sousTitle: 'Femmes et enfants'
        },
        {
          imgSrc: require('@/assets/images/chifre3.svg'),
          title: '+65%',
          sousTitle: 'Issus du milieu rural'
        },
        {
          imgSrc: require('@/assets/images/chifre4.svg'),
          title: '100',
          sousTitle: 'Projets par an'
        },
        {
          imgSrc: require('@/assets/images/chifre5.svg'),
          title: '+350',
          sousTitle: 'Partenaires locaux et international'
        }
      ],
      swiperChifre: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.chifre-button-next',
          prevEl: '.chifre-button-prev'
        }
        // 640: {
        //   slidesPerView: 1,
        //   spaceBetween: 10
        // },
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 10
        // }
      }
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'site/GetIsMobile'
    })
  }
}
</script>

<style lang="scss">
.chifres {
  position: relative;
  background: url("@/assets/images/back-chifre.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 40px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #0773c7ba;
    /* z-index: 1; */
    border-radius: 10px;
  }
  &__content {
    width: 100%;
    padding: 40px;
    .left-chifre {
      position: relative;
      margin-top: 15px;
      h2 {
        color: #fff;
        &::before {
          left: 2px;
          top: -30px;
        }
      }
      span {
        font-family: "ITC Avant Garde Gothic Std";
        font-size: 16px;
        color: #fff;
      }
      &::after {
        content: "";
        width: 1px;
        height: 135%;
        right: 20px;
        position: absolute;
        background: rgb(255 255 255 / 50%);
        filter: blur(1px);
        right: -31px;
        top: -19px;
      }
    }
    .right-chifre {
      .row-content {
        justify-content: center;
      }
    }
  }
}
/*********************************** MOBILE ******************************/
@media (max-width: 320px) {
  .chifres{
  &__content{
    .left-chifre{
      text-align: center;
      margin-bottom: 30px;
      h2{
        position: relative;
       font-size: 20px !important;
        &::before{
        left: 43% !important;
    top: 25% !important;
        }
      }
      &::after{
            height: 0;
            width: 0;
          }
    }
  }
  }
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
.chifres{
  &__content{
    .left-chifre{
      text-align: center;
      margin-bottom: 30px;
      h2{
        position: relative;
        font-size: 30px;
        &::before{
          transform: translate(-7%,-90%);
    left: 50%;
    top: 50%;
    right: 0;
    height: 100%;
        }
      }
      &::after{
            height: 0;
            width: 0;
          }
    }
    .right-chifre{
      .chifre__mobile{
        .swiperWrap{
          .paginationChifre{
            .chifre-button-prev,.chifre-button-next{
    background: #ececec;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    &::after{
      color: #E67825;
    font-size: 12px;
    }
            }
          }
        }
        .list-chifre{
          img{
            width: 30%;
          }
          &::after{
            height: 0;
            width: 0;
          }
        }
      }
    }
  }
  &::before{
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
}
}
</style>
