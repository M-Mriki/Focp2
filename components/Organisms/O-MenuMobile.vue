<template>
  <div>
    <div id="menuToggle">
      <input type="checkbox">
      <span />
      <span />
      <span />
      <ul id="menu">
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
        <hr>
        <div class="head__option">
          <div class="head__search">
           <AtomsASearch />
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
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedLang: 'fr',
      modalShow: false,
      search: '',
      submittedSearch: []
    }
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
<style lang="css">
#menuToggle {
  display: block;
  position: relative;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  background-color: #fff;
  padding: 8px;
  border: 1px solid #c2b1b1;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: tomato;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: orange;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(5px, 0px);
  background: orange;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, 7px);
}

#menu {
  position: absolute;
  width: 430px;
  padding: 20px;
  /* padding-top: 120px; */
  background: #fff;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  right: -18px;
  top: 61px;
  z-index: 0;
  text-align: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
      margin-top: -100px;
    padding-top: 100px;
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}
#menu li a {
  position: relative;
  font-family: "ITC Avant Garde Gothic Std";
  font-size: 14px;
  font-weight: normal;
  color: #444444;
}
#menu li a.nuxt-link-exact-active::after {
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
#menuToggle input:checked ~ ul {
  transform: none;
  right: -16px;
}
.head__option {
  display: flex;
  justify-content: center;
}
.head__option .head__lang {
  padding-left: 50px;
  background: url("~assets/images/icon-lang.svg") no-repeat left 25px center;
  display: flex;
}

.head__option .head__lang select {
  background: url("~assets/images/flesh-lang.svg") no-repeat center right;
  appearance: none;
  border: none;
  /* color: $GrayFency; */
  padding-right: 12px;
  font-weight: 700;
  font-size: 16px;
}

/****************************************MOBILE************************************/
@media (max-width: 320px) {
  #menu {
    width: 322px;
  }
}
@media (min-width: 375px) {
  #menu {
    width: 378px;
  }
}

</style>
