// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'

// Vue.use(VueAwesomeSwiper)
import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Navigation, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const { directive } = getAwesomeSwiper(SwiperClass)
Vue.directive('swiper', directive)
