<template>
  <div class="DeVousNous__item">
    <figure class="images">
      <b-img v-bind="{ src: item.imgSrc, alt: item.alt }" fluid />
    </figure>
    <div class="DeVousNous__inner">
      <h3>{{ item.title }}</h3>
      <span>{{ item.sousTitle }}</span>
      <div class="inner__footer">
        <!-- <b-img v-bind="{ src: item.imgCoeur, alt: item.alt }" fluid />
        <b-img v-bind="{ src: item.imgShare, alt: item.alt }" fluid /> -->
      </div>
    </div>
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

</style>
