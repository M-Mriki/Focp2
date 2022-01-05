<template>
  <div class="saviezVous">
    <h2>Saviez-vous que…</h2>
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div v-for="banner in banners" :key="banner" class="swiper-slide">
          <div class="images">
            <img :src="banner.imgSrc" class="img-fluid">
            <div
              class="image-colors"
              :style="{ backgroundColor: banner.colors }"
            />
            <div class="content-sliders-saviez">
              <h3>{{ banner.title }}</h3>
              <p class="description-savier">
                {{ banner.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      banners: [
        {
          title: 'COVID 19',
          description:
            'En Afrique et en Inde, plusieurs coopératives et partenaires ont été accompagnés pour lutter contre la COVID-19 : des formations pratiques dont l’objectif est de sensibiliser les populations africaines aux gestes barrières à observer, et la mise à disposition de matériel pour la fabrication de savons, visières, masques, gels hydro alcooliques.',
          imgSrc: require('@/assets/images/savie1.png'),
          colors: '#612C7F'
        },
        {
          title: 'Digitalisation du soutien pédagogique',
          description:
            'En Afrique et en Inde, plusieurs coopératives et partenaires ont été accompagnés pour lutter contre la COVID-19 : des formations pratiques dont l’objectif est de sensibiliser les populations africaines aux gestes barrières à observer, et la mise à disposition de matériel pour la fabrication de savons, visières, masques, gels hydro alcooliques.',
          imgSrc: require('@/assets/images/savie2.png'),
          colors: '#18AAB5'
        },
        {
          title: 'Communautés rurales et développement durable',
          description:
            'En Afrique et en Inde, plusieurs coopératives et partenaires ont été accompagnés pour lutter contre la COVID-19 : des formations pratiques dont l’objectif est de sensibiliser les populations africaines aux gestes barrières à observer, et la mise à disposition de matériel pour la fabrication de savons, visières, masques, gels hydro alcooliques.',
          imgSrc: require('@/assets/images/savie1.png'),
          colors: '#E67825'
        }
      ],
      swiperOption: {
        slidesPerView: 2.1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
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
.saviezVous {
  margin-left: 80px;
  overflow: hidden;
  h2 {
    position: relative;
    margin-top: 90px;
  }
  .swiperWrap {
    margin-top: 30px;
    .swiper-wrapper {
      .swiper-slide {
        /* border: 1px solid green; */
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
        .images {
          height: 300px;
        }
        .image-colors {
          background-color: rgb(97, 44, 127);
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          opacity: 0.7;
          border-radius: 10px;
        }
        .content-sliders-saviez {
          position: absolute;
          top: 0;
          color: #fff;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: start;
          padding: 35px;
          h3 {
            font-family: "ITC Avant Garde Gothic Std";
            font-size: 32px;
            font-weight: bold;
            position: relative;
            padding-left: 40px;
            &::before {
              content: "";
              position: absolute;
              background: url("~assets/images/icon-circle-traingle.svg")
                no-repeat;
              width: 100%;
              height: 100%;
              left: 0px;
              bottom: 0px;
            }
          }
          .description-savier {
            font-family: "ITC Avant Garde Gothic Std";
            font-size: 16px;
          }
        }
      }
    }
  }
}

/******************************* MOBILE ****************** */
@media (max-width: 575.98px) {
  .saviezVous {
    margin-left: 0;
    padding-inline: 20px;
    .swiperWrap {
      .swiper-wrapper {
        .swiper-slide {
          .images {
            height: 380px;
          }
          .content-sliders-saviez {
            h3 {
              font-size: 20px;
              padding-left: 40px;
              &::before {
                content: "";
                position: absolute;
                background: url("~assets/images/icon-circle-traingle.svg")
                  no-repeat;
                width: 100%;
                height: 100%;
                left: 0px;
                bottom: 0px;
              }
            }
            .description-savier {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .saviezVous {
    margin-left: 30px;
    .swiperWrap {
      .swiper-wrapper {
        .swiper-slide {
          .images {
            height: 380px;
          }
          .content-sliders-saviez {
            h3 {
              font-size: 20px;
              padding-left: 40px;
              &::before {
                content: "";
                position: absolute;
                background: url("~assets/images/icon-circle-traingle.svg")
                  no-repeat;
                width: 100%;
                height: 100%;
                left: 0px;
                bottom: 0px;
              }
            }
            .description-savier {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>
