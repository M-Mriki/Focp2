<template>
  <div class="actualites__item">
    <div class="actualites__images">
      <b-img v-bind="{ src: item.imgSrc, alt: item.alt }" fluid />
    </div>
    <div class="actualites__info">
      <div class="actualites__dates">
        <span class="jour">{{ item.jour }}</span>
        <span class="mois">{{ item.mois }}</span>
      </div>
      <div class="actualites__detais">
        <span class="tag">{{ item.formation }}</span>
        <h3>{{ item.title }}</h3>
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
