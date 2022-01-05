/* eslint-disable vue/valid-v-bind */
<template>
  <div>
    <b-container>
      <div class="head">
        <div class="head__logo">
          <AtomsALogo />
          <!-- <NuxtLink to="/">
            <img src="@/assets/images/Logo.svg" alt="Logo OCP">
          </NuxtLink> -->
        </div>
        <div v-if="isMobile" class="menu-for-mobile">
          <OrganismsO-MenuMobile />
        </div>
        <div v-else class="head__menu">
          <MoleculesMMenuheader />
          <div class="head__option">
            <div class="head__search">
              <button @click="modalShow = !modalShow">
                <img src="@/assets/images/icon-search.svg" alt="Logo">
              </button>
            </div>
            <div class="head__lang">
              <select v-model="selectedLang">
                <option value="fr">
                  <!-- <nuxt-link :to="switchLocalePath('fr')">
                    Fr
                  </nuxt-link> -->
                  Fr
                </option>
                <option value="en">
                  En
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </b-container>
    <b-container fluid p-0>
      <div class="sliders">
      <MoleculesMSliderHp />
      <MoleculesMPopVideo />
      </div>
    </b-container>

    <div v-if="modalShow" id="modalShow" class="search">
      <button class="close-search" @click="modalShow = !modalShow">
        <img src="@/assets/images/close-search.png">
      </button>
      <form @submit.prevent="handleSubmit">
        <input v-model="search" type="text" placeholder="Recherche" required>
        <input type="submit">
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'userAgent',
  data () {
    return {
      selectedLang: 'fr',
      modalShow: false,
      search: '',
      submittedSearch: []
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'site/GetIsMobile'
    })
  },
  methods: {
    handleSubmit () {
      if (this.search === '') {
        return
      }
      this.submittedSearch.push(this.search)
      this.search = ''
      this.modalShow = false
    }
  }
}
</script>
<style lang="scss">
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 2rem;
  .head__logo{
    z-index: 52;
  }
  .menu-for-mobile{
    position: absolute;
    right: 15px;
    z-index: 51;
  }
  .head__menu {
    display: flex;
    align-items: flex-start;
    z-index: 2;
    /* ul {
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
    } */
    .head__option {
      display: flex;
      margin-left: 80px;
      .head__lang {
        padding-left: 50px;
        background: url("~assets/images/icon-lang.svg") no-repeat left 25px
          center;
        display: flex;

        select {
          background: url("~assets/images/flesh-lang.svg") no-repeat center
            right;
          appearance: none;
          border: none;
          color: $GrayFency;
          padding-right: 12px;
          font-weight: 700;
          font-size: 16px;
        }
      }
    }
  }
}
.sliders{
  position: relative;
  margin-top: -120px;
}
.search {
  background: #5c971ab0;
  position: fixed;
  width: 100%;
  top: 0;
  height: 100%;
  z-index: 2;
  form {
    width: 600px;
    margin: auto;
    top: 40%;
    position: relative;
    input[type="text"] {
      border: none;
      border-bottom: 1px solid $firstColor;
      background: transparent;
      width: 100%;
      font-size: 52px;
      color: #ffffff;
      font-weight: 700;
      outline: none !important;
    }
    input[type="text"]::placeholder {
      color: #fff;
    }
    input[type="submit"] {
      position: absolute;
      right: 0;
      bottom: 25px;
      font-size: 0;
      background: transparent;
      width: 35px;
      height: 28px;
      background: url("~assets/images/back-submit.png");
      padding: 0;
      margin: 0;
      border: none;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
  .close-search {
    position: absolute;
    right: 30px;
    top: 30px;
    background: transparent;
    border: none;
    outline: none !important;
  }
}

/******************************************** MOBILE *****************************************/
</style>
