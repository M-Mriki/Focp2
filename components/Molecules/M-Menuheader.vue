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
.head__menu{
     ul {
      display: flex;
      list-style: none;
      align-items: center;
      padding-left: 0;
      margin-left: 0;
      border-bottom: 1px solid $GrayFency;
      margin-bottom: 0;

      li {
        padding-right: 40px;
        padding-bottom: 15px;
        a {
          position: relative;
          font-family: "ITC Avant Garde Gothic Std";
          font-size: 14px;
          font-weight: normal;

          &.nuxt-link-exact-active {
            &::after {
              position: absolute;
              content: "";
              width: 20px;
              height: 15px;
              bottom: -23px;
              left: 50%;
              border-radius: 50%;
              border: 20px 30px 20px 30px;
              border-top: 10px solid #ff8100;
              border-right: 0px solid transparent;
              border-bottom: 0px solid transparent;
              border-left: 0px solid transparent;
              transform: translate(-50%);
            }
          }
        }
        &:nth-last-child(1) {
          padding-right: 0;
        }
      }
    }
    }
</style>
