<template>
  <div>
    <div class="footerbtm__sitemap">
      <ul>
        <li>
          <NuxtLink to="">
            Site map
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="" class="vertical-line">
            Questions et Réponses
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="">
            Informations Légales
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.footerbtm__sitemap {
  margin-inline: 35px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li{
      padding: 0;
    a {
      color: $firstColor;
      font-size: 14px;
      font-family: "ITC Avant Garde Gothic Std Book";
text-transform: capitalize;
      &.vertical-line {
        border-left: 1px solid $firstColor;
        margin: 0 20px;
        padding-inline: 20px;
        border-right: 1px solid $firstColor;
      }
    }
    }
  }
}
</style>
