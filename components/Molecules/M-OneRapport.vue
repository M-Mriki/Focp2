<template>
  <div class="rapport">
    <b-img v-bind="{ src: item.imgSrc, alt: item.alt }" fluid />
    <h3>{{ item.title }}</h3>
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

<style>

</style>
