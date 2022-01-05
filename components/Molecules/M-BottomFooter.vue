<template>
  <div>
   <ul>
      <li>
        <NuxtLink to="/fondation">
          {{ $t("La Fondation") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/Engager">
          {{ $t("S’engager") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          {{ $t("Agir") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          {{ $t("Partager") }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          {{ $t("Contact") }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.footer__menu {
ul {
      display: flex;
      list-style: none;
      align-items: center;
      li {
        padding-right: 60px;
        a {
         color: $firstColor;
            font-family: "ITC Avant Garde Gothic Std";
            font-size: 14px;
            font-weight: normal;
            text-transform: uppercase;

          &.nuxt-link-exact-active {
            &::after {
              position: absolute;
              content: "";
              width: 0;
              height: 0;
              border: 0
            }
          }
        }
      }
}
}
</style>
