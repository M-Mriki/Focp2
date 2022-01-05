/* eslint-disable no-tabs */
<template>
  <b-container>
    <div class="CarteIntercative">
      <b-row>
        <b-col cols="12" md="12" lg="12" xl="4">
          <div class="CarteIntercative__box">
            <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
              <div class="paginationMaps">
                <div
                  slot="button-prev"
                  class="swiper-button-prev map-button-prev"
                />
                <div
                  slot="button-next"
                  class="swiper-button-next map-button-next"
                />
              </div>
              <div class="swiper-wrapper">
                <div v-for="(country, index) in countries" :key="index" :data_id="country.data_id" class="swiper-slide">
                  <div class="CarteIntercative__infoPays">
                    <h5 class="CarteIntercative__title">
                      {{ country.title }}
                    </h5>
                    <span
                      class="CarteIntercative__sousTitle"
                    >{{ country.sousTitle }}</span>
                    <span
                      class="CarteIntercative__pays"
                    >{{ country.destination }}
                      {{ destination }}
                    </span>
                    <p class="CarteIntercative__description">
                      {{ country.description }}
                    </p>
                    <div class="CarteIntercative__galerie">
                      <img src="@/assets/images/pays1.png" alt="">
                      <img src="@/assets/images/pays2.png" alt="">
                      <img src="@/assets/images/pays3.png" alt="">
                    </div>
                    <button class="btn btn-decovrir">
                      en savoir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="12" lg="12" xl="8">
          <div class="CarteIntercative__imageMaps">
            <!-- <img src="mapfinal.svg" alt="PAys" @click="handlid(id)"> -->
            <svg
              id="Layer_1"
              ref="testid"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 845.4 602.8"
              style="enable-background: new 0 0 845.4 602.8"
              xml:space="preserve"
            >
              <g>
                <g id="Groupe_de_masques_2" class="st0">
                  <g id="countinent" transform="translate(-942.231 -429.204)">
                    <template v-for="area in areas">
                      <path :key="area.id" v-bind="{...area}" :style="{Cursor: 'pointer'}" @click="getID(area.data_id)" />
                    </template>
                  </g>
                </g>
              </g>
              <g id="Dots" transform="translate(92 65)">
                <template v-for="(circle,index) in circles">
                  <component :is="circle.parent.element" :key="index" v-bind="{...circle.parent.attributes}" :style="{Cursor: 'pointer'}" @click="getID(circle.parent.attributes.data_id)">
                    <component :is="child.element" v-for="(child,index_child) in circle.childrens" :key="index_child" v-bind="{...child.attributes}" />
                  </component>
                </template>
              </g>
              <g id="Names" transform="translate(90 71)">
                <g id="Groupe_6176">
                  <template v-for="(name,index) in names">
                    <component :is="name.parent.element" :key="index" v-bind="{...name.parent.attributes}" :style="{Cursor: 'pointer'}" @click="getID(name.parent.attributes.data_id)">
                      <component :is="child.element" v-for="(child,index_child) in name.childrens" :key="index_child" v-bind="{...child.attributes}" />
                    </component>
                  </template>
                </g>
              </g>
            </svg>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { Areas, Circles, Names } from '@/data/map'

export default {
  data () {
    return {
      countries: [
        {
          title: 'La Fondation OCP',
          sousTitle: 'dans le monde',
          destination: 'Maroc, Souss massa',
          description: "Découvrez l'impact de nos projets en Afrique et en Asie",
          data_id: 'MA'
        },
        {
          title: 'La Fondation OCP2',
          sousTitle: 'dans le monde',
          destination: 'Maroc, Souss massa',
          description: "Découvrez l'impact de nos projets en Afrique et en Asie",
          data_id: 'MA_2'
        },
        {
          title: 'La Fondation Mali',
          sousTitle: 'dans le monde',
          destination: 'Maroc, Souss massa',
          description: "Découvrez l'impact de nos projets en Afrique et en Asie",
          data_id: 'ML'
        },
        {
          title: 'La Fondation Inde',
          sousTitle: 'dans le monde',
          destination: 'Maroc, Souss massa',
          description: "Découvrez l'impact de nos projets en Afrique et en Asie",
          data_id: 'IN'
        }
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        // loop: true,
        navigation: {
          nextEl: '.map-button-next',
          prevEl: '.map-button-prev'
        }
      },
	    areas: Areas,
	    circles: Circles,
      names: Names
    }
  },
  methods: {
    getID (item) {
      const slides = this.mySwiper.slides
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].getAttribute('data_id') === item) {
          this.mySwiper.slideTo(i, 1000, false)
        }
      }
    }
  }
}
</script>

<style lang="scss">
svg {
  border-radius: 10px;
}
.st0 {
  clip-path: url(#SVGID_2_);
}
.st1 {
  fill: #c5ccd2;
}
.st2 {
  fill: #284573;
}
.st3 {
  fill: #385c97;
}
.st4 {
  fill: #62a152;
}
.st5 {
  opacity: 0.46;
  fill: #284573;
  enable-background: new;
}
.st6 {
  opacity: 0.46;
  fill: #e67825;
  enable-background: new;
}
.st7 {
  fill: #e67825;
}
.st8 {
  enable-background: new;
}
.st9 {
  fill: #ffffff;
}
.CarteIntercative {
  background: #efefef;
  border-radius: 10px;
  /* box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px; */
  margin-bottom: 30px;
  &__box {
    display: flex;
    align-items: center;
    height: 100%;
    width: 380px;
    margin-left: 20px;
    .swiperWrap {
      overflow: hidden;
      position: relative;
      .paginationMaps {
        position: absolute;
        top: 44px;
        .map-button-next {
          background: $colorgren;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          left: 90px;
          &::after {
            color: #fff;
            font-size: 12px;
          }
        }
        .map-button-prev {
          background: #ececec;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          left: 35px;
          &::after {
            color: $colorOrange;
            font-size: 12px;
          }
        }
      }
    }
  }
  &__infoPays {
    background: #fff;
    border-radius: 10px;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    border-right: 8px solid #e67825;
    padding: 60px 30px;
    span {
      display: block;
      font-weight: normal;
    }

    .btn-decovrir {
      background: #62a152;
      font-family: "ITC Avant Garde Gothic Std";
      font-weight: normal;
      font-size: 12px;
      text-transform: uppercase;
    }

    &::after {
      position: absolute;
      content: "";
      background: url("~assets/images/shapes.png") no-repeat;
      background-size: cover;
      background-position: right center;
      width: 100%;
      height: auto;
    }
  }
  &__title {
    font-family: "ITC Avant Garde Gothic Std";
    font-size: 25px;
    color: $firstColor;
    font-weight: bold;
  }
  &__sousTitle {
    font-size: 25px;
    color: $GrayFency;
    font-family: "ITC Avant Garde Gothic Std";
    margin-bottom: 10px;
  }
  &__pays {
    color: #e67825;
    font-family: "ITC Avant Garde Gothic Std Book";
    font-size: 16px;
    position: relative;
    left: 20px;
    &::before {
      content: "";
      position: absolute;
      background: url("~assets/images/position.svg") no-repeat;
      right: 20px;
      width: 100%;
      height: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      left: -5%;
      top: 30px;
      width: 55%;
      background: rgb(230, 120, 37);
      background: linear-gradient(
        90deg,
        rgba(230, 120, 37, 1) 15%,
        rgba(225, 225, 225, 1) 100%,
        rgba(255, 255, 255, 1) 100%,
        rgba(255, 255, 255, 1) 100%
      );
    }
  }
  &__description {
    font-family: "ITC Avant Garde Gothic Std Book";
    font-size: 16px;
    color: $GrayFency;
    max-width: 80%;
    margin-top: 20px;
  }
  &__galerie {
    margin-block: 20px;
    display: flex;
    gap: 10px;
    img {
      border-radius: 10px;
    }
  }
}
</style>
