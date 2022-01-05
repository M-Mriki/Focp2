<template>
  <div class="rapports">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="12" xl="12">
          <h2>Un engagement sur la durée</h2>
        </b-col>
      </b-row>
      <div class="allRapports">
        <div v-if="isMobile" class="rapport__mobile">
          <div v-swiper:mySwiper="swiperRapport" class="swiperWrap">
            <div class="swiper-wrapper">
              <div v-for="item in items" :key="item" class="swiper-slide">
                <MOneRapport :item="item" />
              </div>
            </div>
          </div>
        </div>
        <div v-else class="rapport__desktop">
          <b-row>
            <b-col
              v-for="(item, index) in items"
              :key="index"
              cols="12"
              md="12"
              lg="12"
              xl="3"
            >
              <MOneRapport :item="item" />
            </b-col>
          </b-row>
        </div>
      </div>
      <b-row>
        <b-col cols="12" md="12" lg="12" xl="12">
          <button class="btn btn-ciel">
            toutes les publication
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MOneRapport from '../Molecules/M-OneRapport.vue'
export default {
  components: { MOneRapport },
  data () {
    return {
      items: [
        {
          imgSrc: require('@/assets/images/rap1.png'),
          alt: "Rapport d'activité 2019",
          title: "Rapport d'activité 2019"
        },
        {
          imgSrc: require('@/assets/images/rap2.png'),
          alt: "Rapport d'activité 2018",
          title: "Rapport d'activité 2018"
        },
        {
          imgSrc: require('@/assets/images/rap3.png'),
          alt: "Rapport d'activité 2017",
          title: "Rapport d'activité 2017"
        },
        {
          imgSrc: require('@/assets/images/rap4.png'),
          alt: "Rapport d'activité 2016",
          title: "Rapport d'activité 2016"
        }
      ],
      swiperRapport: {
        slidesPerView: 1.5,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
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
.rapports {
  margin-block: 80px;
  h2 {
    position: relative;
    width: fit-content;
    margin: auto;
    &::before {
      bottom: 0;
      height: 30px;
      left: 50%;
      top: -71%;
    }
  }
  .allRapports {
    background: url("@/assets/images/back-rapport.png") no-repeat left center;
    height: 100%;
    width: 100%;
    padding-top: 80px;
    margin-top: 40px;
    .rapport {
      background: #fff;
      box-shadow: rgb(0 0 0 / 10%) 0px 10px 50px;
      border-radius: 10px;
      position: relative;
      height: 230px;
      img {
        position: absolute;
        top: -85px;
      }
      h3 {
        position: absolute;
        bottom: 0;
        padding-bottom: 10px;
        font-family: "ITC Avant Garde Gothic Std";
        color: $firstColor;
        font-size: 19px;
        width: 160px;
        text-align: center;
        left: 50%;
        transform: translate(-50%, 10%);
        text-transform: uppercase;
      }
    }
  }
  .btn-ciel {
    margin: 40px auto;
    display: block;
  }
}

/*********************************** MOBILE ******************************/
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .rapports{
    h2{
      text-align: center;
      max-width: 300px;
      font-size: 30px;
      &::before{
        top: -45%;
      }
    }
    .allRapports{
      .rapport__mobile{
        .rapport{
         /* width: 260px; */
        }
      }
    }
  }
}
</style>
