<template>
  <div class="AuCoeur">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="12" xl="5">
          <div class="AuCoeur__leftcontent">
            <h2>Au coeur de l'action</h2>
            <p>
              Des projets par et pour les communautés, basés sur une démarche
              d'innovation sociale
            </p>
            <button class="btn btn-orange">
              Découvrir
            </button>
          </div>
        </b-col>
        <b-col cols="12" md="12" lg="12" xl="7">
          <div v-if="isMobile" class="AuCoeur__mobile">
            <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
              <div class="swiper-wrapper">
                <div v-for="coeur in coeurs" :key="coeur" class="AuCoeur__box swiper-slide">
                  <OneCoeur :coeur="coeur" />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="AuCoeur__rightcontent">
            <div v-for="coeur in coeurs" :key="coeur" class="AuCoeur__box">
              <OneCoeur :coeur="coeur" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import OneCoeur from '@/components/Molecules/M-OneCoeur.vue'
export default {
  components: {
    OneCoeur
  },
  middleware: 'userAgent',
  data () {
    return {
      coeurs: [
        {
          title: 'Education pour tous',
          imgSrc: require('@/assets/images/coeur1.png'),
          countries: 'maroc'
        },
        {
          title: 'Innovation et R&D',
          imgSrc: require('@/assets/images/coeur2.png'),
          countries: 'senegal'
        },
        {
          title: 'Agriculture durable',
          imgSrc: require('@/assets/images/coeur3.png'),
          countries: 'togo'
        },
        {
          title: 'Biodiversité & Ecosystèmes',
          imgSrc: require('@/assets/images/coeur1.png'),
          countries: 'maroc'
        }
      ],
      swiperOption: {
        slidesPerView: 1.3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
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
.AuCoeur {
    .swiperWrap{
        .swiper-slide{
            img{
                height: auto;
                width: auto;
            }
        }
    }
  margin-block: 100px;
  background: url(~assets/images/back-coeur.png);
  background-repeat: no-repeat;
  height: auto;
  background-position: right bottom;
  background-size: 60%;
  &__leftcontent {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    h2 {
        z-index: 0;
      &::before {
        left: 25px;
        top: 180px;
      }
    }
    p {
      font-family: "ITC Avant Garde Gothic Std Book";
      font-size: 18px;
      color: $GrayFency;
      margin-block: 20px;
      max-width: 300px;
      z-index: 0;
    }
    .btn-orange{
        cursor: pointer;
        z-index: 0;
    }
  }

}
/*************************************MObile*********************************** */
@media (max-width: 575.98px) {
    .AuCoeur {
        background-size: 100%;
        &__leftcontent {
            h2{
                font-size: 30px;
                &::before{
                        top: -31px;
                }
            }
        }
        .AuCoeur__mobile{
            margin-top: 20px;
        }
        .swiperWrap{
        .swiper-slide{
            figure{
            img{
                height: auto;
                width: 100%;
            }
            .AuCoeur__overlay{
                img{
                    width: auto;
                }
            }
            }
        }
    }
    }
 }
</style>
