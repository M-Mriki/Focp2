<template>
  <div>
    <ul class="reseaux-social">
      <li>
        <NuxtLink to="/">
          <img src="@/assets/images/icon-fb.svg" alt="facebook">
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          <img src="@/assets/images/icon-twitter.svg" alt="twitter">
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          <img src="@/assets/images/icon-ytb.svg" alt="youtube">
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          <img src="@/assets/images/icon-insta.svg" alt="instagram">
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
      .reseaux-social {
        list-style: none;
        display: flex;
        li {
          padding-right: 20px;
        }
      }
</style>
