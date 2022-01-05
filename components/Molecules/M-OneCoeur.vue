<template>
  <div>
    <figure @click="modalShow = !modalShow">
      <!-- <img :src="coeur.imgSrc" :alt="coeur.title"> -->
      <img v-bind="{src:coeur.imgSrc,alt:coeur.title}">
      <div class="AuCoeur__overlay">
        <img src="@/assets/images/play-button.svg" alt="Play">
      </div>
    </figure>
    <div class="AuCoeur__caption">
      <h6>{{ coeur.title }}</h6>
      <span>{{ coeur.countries }}</span>
    </div>
    <div>
      <b-modal v-model="modalShow">
        <video width="420" height="340" controls>
          <source src="movie.mp4" type="video/mp4">
          <source src="movie.ogg" type="video/ogg">
          Your browser does not support the video tag.
        </video>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['coeur']
  props: {
    coeur: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      modalShow: false
    }
  }
}
</script>

<style lang="scss">
.AuCoeur{
&__rightcontent {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__box {
    background: #fff;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    padding: 20px;
    max-width: 301px;
    min-height: 300px;
    &:first-child {
      margin-left: -25px;
    }
    figure {
    position: relative;
    cursor: pointer;
    .AuCoeur__overlay {
        transition: .5s ease;
        opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(40 69 115 / 50%);
    width: 100%;
    height: 100%;
      img{
          position: absolute;
          top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      }
    }
  }
  &:hover .AuCoeur__overlay{
      opacity: 1;
  }
  }
  &__caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h6 {
      color: #3c1850;
      font-size: 30px;
      font-family: 'Paper Flowers';
    }
    span {
      font-family: "ITC Avant Garde Gothic Std Demi Condensed";
      font-size: 12px;
      color: #58a345;
    }
  }
  }
  .modal-content{
    background: transparent;
    border: 0;
    .modal-header{
      border: 0;
      .close{
        color: #fff;
    opacity: 1;
    margin: 0;
      }
    }
    .modal-footer{
      display: none;
    }
  }

  /*************************************MObile*********************************** */
@media (max-width: 575.98px) {
  .AuCoeur{
    &__box {
      margin-left: 20px;
    }
  }
}
</style>
