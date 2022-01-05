<template>
  <div class="boxVideo">
    <div class="boxVideo__image">
      <b-img src="~/assets/images/img-video.png" fluid alt="Responsive" />
    </div>
    <div class="boxVideo__caption">
      <span> La digitalisation au service des écoles parrainées </span>
    </div>
    <div class="boxVideo__chevron">
      <NuxtLink to="/">
        <b-img src="~/assets/images/icon-orange-next.svg" fluid alt="chevron" />
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.boxVideo {
  display: flex;
  align-items: center;
  max-width: 540px;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 15px 20px;
  cursor: pointer;
  &__image {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      background: url("~assets/images/play-button.svg") no-repeat center;
      background-size: contain;
      width: 50px;
      height: 50px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &__caption {
    max-width: 250px;
    padding-left: 20px;
    padding-right: 60px;
    font-weight: 600;

    span {
      font-size: 18px;
      font-family: "ITC Avant Garde Gothic Std";
      color: #3c1850;
    }
  }
}
/************************************** Mobile ***************************************** */
@media (max-width: 320px) {
  .boxVideo {
    max-width: 296px !important;
    bottom: 40px;
    left: 4% !important;
    border-radius: 10px;
}
}
@media (max-width: 575.98px) {
  .boxVideo{
    max-width: 390px;
    bottom: 40px;
    left: 5%;
    border-radius: 10px;
    &__caption{
      max-width: 190px;
      padding-right: 0;
      span{
        font-size: 16px;
      }
    }
  }
}
</style>
