<template>
  <div class="DeVousNous">
    <div class="DeVousNous__content">
      <b-container>
        <b-row>
          <b-col cols="12" md="12" lg="12" xl="8">
            <div class="DeVousNous__card">
              <div v-swiper:mySwiper="swiperNous" class="swiperWrap">
                <div class="paginationNous">
                  <div
                    slot="button-prev"
                    class="swiper-button-prev nous-button-prev"
                  />
                  <div
                    slot="button-next"
                    class="swiper-button-next nous-button-next"
                  />
                </div>
                <div class="mobilescreen-image" />
                <div class="swiper-wrapper">
                  <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="swiper-slide"
                  >
                    <MOneDeVousNous :item="item" />
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="12" lg="12" xl="4">
            <div class="DeVousNous__right">
              <h2>De vous à nous</h2>
              <p class="first-description">
                Vous participez à un projet soutenu par la Fondation OCP ?
              </p>
              <p class="second-description">
                Mettez en ligne une photo ou une vidéo et partagez ainsi votre
                instant émotion !
              </p>
              <button class="btn btn-ciel">
                Envoyez-nous
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import MOneDeVousNous from '../Molecules/M-OneDeVousNous.vue'
export default {
  components: { MOneDeVousNous },
  data () {
    return {
      items: [
        {
          imgSrc: require('@/assets/images/image1.png'),
          imgCoeur: require('@/assets/images/icon-coeur.svg'),
          imgShare: require('@/assets/images/icon-share.svg'),
          title: 'Projet GreenLand',
          sousTitle: 'Settat-Maroc'
        },
        {
          imgSrc: require('@/assets/images/image2.png'),
          imgCoeur: require('@/assets/images/icon-coeur.svg'),
          imgShare: require('@/assets/images/icon-share.svg'),
          title: 'Projet GreenLand',
          sousTitle: 'Settat-Maroc'
        },
        {
          imgSrc: require('@/assets/images/image3.png'),
          imgCoeur: require('@/assets/images/icon-coeur.svg'),
          imgShare: require('@/assets/images/icon-share.svg'),
          title: 'Projet GreenLand',
          sousTitle: 'Settat-Maroc'
        },
        {
          imgSrc: require('@/assets/images/image3.png'),
          imgCoeur: require('@/assets/images/icon-coeur.svg'),
          imgShare: require('@/assets/images/icon-share.svg'),
          title: 'Projet GreenLand',
          sousTitle: 'Settat-Maroc'
        },
        {
          imgSrc: require('@/assets/images/image4.png'),
          imgCoeur: require('@/assets/images/icon-coeur.svg'),
          imgShare: require('@/assets/images/icon-share.svg'),
          title: 'Projet GreenLand',
          sousTitle: 'Settat-Maroc'
        }
      ],
      swiperNous: {
        spaceBetween: 20,
        slidesPerGroup: 1,
        centeredSlides: true,
        slidesPerView: 4,
        initialSlide: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // },
        navigation: {
          nextEl: '.nous-button-next',
          prevEl: '.nous-button-prev'
        },
        breakpoints: {
          1366: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.DeVousNous {
  margin-block: 100px;
  background: url("@/assets/images/back-phone.png") no-repeat right center;
  height: 100%;
  width: 100%;
  &__card {
    padding-top: 30px;
    overflow: hidden;
    /* display: flex; */
    gap: 10px;
    .swiperWrap {
      .mobilescreen-image {
        background: url("@/assets/images/cellphone.svg");
        content: "";
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: block;
        height: 400px;
        left: calc(50% + 0.5px);
        position: absolute;
        top: -30px;
        transform: translateX(-50%);
        width: 250px;
        z-index: 2;
      }
      .paginationNous {
        .nous-button-prev {
          left: 230px;
        }
        .nous-button-next {
          right: 230px;
        }
        .nous-button-prev,
        .nous-button-next {
          background: #fff;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          &::after {
            color: $colorgren;
            font-size: 12px;
          }
        }
      }
      .swiper-wrapper {
        cursor: pointer;
        .swiper-slide {
          /* max-width: 175px; */
          &.swiper-slide-active {
            .DeVousNous__item {
              height: 343px;
              top: -30px;
              &::after {
                border-radius: 10px;
              }
            }
            .DeVousNous__inner {
              visibility: visible;
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
  &__item {
    /* width: 450px;
		height: 540px; */
    position: relative;
    /* border-radius: 32px; */
    /* overflow: hidden; */
    figure {
      margin: 0;
      &.images {
        width: 100%;
        height: 100%;
        overflow: hiddden;
        position: relative;
        border-radius: 10px;
      }
    }
    &::after {
      position: absolute;
      content: "";
      -webkit-box-shadow: 0px -90px 47px -42px rgba(40, 69, 115, 0.9) inset;
      -moz-box-shadow: 0px -90px 47px -42px rgba(40, 69, 115, 0.9) inset;
      box-shadow: 0px -90px 47px -42px rgba(40, 69, 115, 0.9) inset;
      bottom: 0;
      height: 30%;
      width: 100%;
      border-radius: 8px;
    }
    .DeVousNous__inner {
      transition: all 300ms cubic-bezier(0.87, -0.38, 0.22, 1.43);
      opacity: 0;
      visibility: hidden;
      transform: translateY(170px);
      position: absolute;
      bottom: 0;
      color: #fff;
      padding: 10px;
      z-index: 2;
      h3 {
        font-size: 15px;
        font-family: "ITC Avant Garde Gothic Std";
        margin-bottom: 0;
      }
      .inner__footer {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
    &:hover .DeVousNous__inner {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
  &__right {
    height: 100%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      position: relative;
      &::before {
        bottom: 40px;
      }
    }
    p {
      font-family: "ITC Avant Garde Gothic Std";
      font-weight: normal;
      font-size: 16px;
      max-width: 285px;
      margin-bottom: 5px;
    }
    .first-description {
      color: $colorOrange;
    }
    .second-description {
      color: $firstColor;
    }
  }
}
/************************** * Mobile****************************** */
@media (max-width: 320px) {
  .DeVousNous {
    background: url("@/assets/images/back-phone.png") no-repeat right center;
    background-position: 128% 0%;
    background-size: 30%;
    &__content {
      .row {
        flex-direction: column-reverse;
        .col-12:first-child {
          padding: 0;
        }
      }
      .DeVousNous__right {
        margin-bottom: 40px;
      }
      .DeVousNous__card {
        .swiperWrap {
          .mobilescreen-image {
            height: 330px !important;
            top: -4px !important;
          }
          .swiper-wrapper {
            .swiper-slide {
              &.swiper-slide-active {
                .DeVousNous__item {
                  height: 295px !important;
                  top: -17px !important;
                }
              }
            }
          }
          .paginationNous {
            .nous-button-prev {
              left: 40px;
            }
            .nous-button-next {
              right: 40px;
            }
          }
        }
      }
      .DeVousNous__right {
        h2 {
          font-size: 30px;
        }
      }
    }
  }
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .DeVousNous {
    background: url("@/assets/images/back-phone.png") no-repeat right center;
    background-position: 128% 0%;
    background-size: 30%;
    &__content {
      .row {
        flex-direction: column-reverse;
        .col-12:first-child {
          padding: 0;
        }
      }
      .DeVousNous__right {
        margin-bottom: 40px;
      }
      .DeVousNous__card {
        .swiperWrap {
          .mobilescreen-image {
            height: 559px;
            top: -85px;
            width: 280px;
          }
          .swiper-wrapper {
            .swiper-slide {
              &.swiper-slide-active {
                .DeVousNous__item {
                  height: 385px;
                  top: -28px;
                }
              }
            }
          }
          .paginationNous {
            .nous-button-prev {
              left: 40px;
            }
            .nous-button-next {
              right: 40px;
            }
          }
        }
      }
    }
  }
}
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .DeVousNous {
    &__content {
      .row {
        flex-direction: column-reverse;
      }
      .DeVousNous__right {
        margin-bottom: 40px;
        p {
          max-width: initial;
        }
      }
      .DeVousNous__card {
        .swiperWrap {
          .mobilescreen-image {
            height: 745px;
            top: -41px;
            width: 507px;
          }
          .swiper-wrapper {
            .swiper-slide {
              &.swiper-slide-active {
                .DeVousNous__item {
                  height: 666px;
                  top: -30px;
                  &::after {
                    border-radius: 50px;
                  }
                  .DeVousNous__inner {
                    padding: 30px;
                    h3 {
                      font-size: 25px;
                    }
                    span {
                      font-size: 25px;
                    }
                  }
                }
              }
            }
          }
          .paginationNous {
            .nous-button-prev {
              left: 130px;
            }
            .nous-button-next {
              right: 130px;
            }
          }
        }
      }
    }
  }
}
// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
  .DeVousNous {
    &__content {
      .row {
        flex-direction: column-reverse;
      }
      .DeVousNous__right {
        margin-bottom: 55px;
        p {
          max-width: initial;
          font-size: 22px;
        }
      }
      .DeVousNous__card {
        .swiperWrap {
          .mobilescreen-image {
            height: 673px;
            top: -36px;
            width: 459px;
          }
          .swiper-wrapper {
            .swiper-slide {
              &.swiper-slide-active {
                .DeVousNous__item {
                  height: 600px;
                  top: -30px;
                  &::after {
                    border-radius: 50px;
                  }
                  .DeVousNous__inner {
                    padding: 30px;
                    h3 {
                      font-size: 25px;
                    }
                    span {
                      font-size: 25px;
                    }
                  }
                }
              }
            }
          }
          .paginationNous {
            .nous-button-prev,
            .nous-button-next {
              width: 40px;
              height: 40px;
            }
            .nous-button-prev {
              left: 220px;
            }
            .nous-button-next {
              right: 220px;
            }
          }
        }
      }
    }
  }
}
</style>
