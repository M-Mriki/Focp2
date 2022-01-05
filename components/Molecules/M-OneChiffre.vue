<template>
  <div class="list-chifre">
    <b-img
      v-bind="{ src: item.imgSrc, alt: item.sousTitle }"
      fluid
    />
    <h4>{{ item.title }}</h4>
    <span>{{ item.sousTitle }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
        .list-chifre {
          text-align: center;
          color: #fff;
          position: relative;
          h4 {
            font-family: "ITC Avant Garde Gothic Std";
            font-weight: bold;
            font-size: 30px;
            margin-top: 10px;
            margin-bottom: 0;
          }
          span {
            font-family: "ITC Avant Garde Gothic Std Demi Condensed";
            font-weight: normal;
            font-size: 11px;
          }
          &::after{
             content: "";
    width: 1px;
    height: 50%;
    right: 20px;
    position: absolute;
   background: rgb(255 255 255 / 50%);
    filter: blur(1px);
    right: -17px;
    top: 32px;
          }
        }
</style>
