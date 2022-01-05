<template>
  <div>
    <div class="footer">
      <b-container>
        <div class="footer__top">
          <div class="footer__logo">
            <!-- <NuxtLink to="/">
              <img src="@/assets/images/Logo.svg" alt="Logo OCP">
            </NuxtLink> -->
            <AtomsALogo />
          </div>
          <div class="footer__menu">
            <!-- <ul>
              <li>
                <NuxtLink to="/fondation">
                  La Fondation
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/Engager">
                  S’engager
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">
                  Agir
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">
                  Partager
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">
                  Contact
                </NuxtLink>
              </li>
            </ul> -->
            <MoleculesMBottomFooter />
          </div>
          <!-- <div class="newsletter">
            <p class="newsletter__title">
              Suivez nos actions et initiatives à travers le monde
            </p>
            <span
              class="newsletter__soustitle"
            >en vous inscrivant à notre newsletter, et devenez part du
              changement</span>
            <form @submit.stop.prevent="handleSubmit">
              <b-form-input
                v-model="email"
                type="email"
                placeholder="Votre adresse email"
                required
              />
              <button class="btn btn-orange">
                Inscrivez-vous
              </button>
            </form>
          </div> -->
          <MoleculesMNewsletter />
          <div class="logo__engage">
            <NuxtLink to="/">
              <img src="@/assets/images/footer-colors.svg" alt="Logo OCP">
            </NuxtLink>
          </div>
        </div>

        <div class="footer__bottom" />
      </b-container>
    </div>
    <div class="footerbtm">
      <b-container>
        <div class="btm__footer">
          <div class="footerbtm__copyright">
            <p class="title__copyrigth">
              OCP Foundation - © Copyright 2021 - Tous droits réservés
            </p>
          </div>
          <!-- <div class="footerbtm__sitemap">
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
          </div> -->
            <MoleculesMSiteMapFooter />
          <div class="footerbtm__social">
            <!-- <ul class="reseaux-social">
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
            </ul> -->
            <MoleculesMReseauxSocial />
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      submittedemail: []
    }
  },
  methods: {
    handleSubmit () {
      if (this.email === '') {
        return
      }
      this.submittedemail.push(this.email)
      this.email = ''
    }
  }
}
</script>
<style lang="scss">
.footer {
  position: relative;
  background-color: $colorGray;
  .footer__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 20px;
    flex-wrap: wrap;
    .footer__menu {
      /* ul {
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
          }
          &:nth-last-child(1) {
            padding-right: 0;
          }
        }
      } */
    }
    /* .newsletter {
      margin-top: 50px;
      .newsletter__title {
        margin-bottom: 0;
        color: $firstColor;
        font-size: 20px;
        font-family: "ITC Avant Garde Gothic Std Demi";
      }
      .newsletter__soustitle {
        color: $GrayFency;
        font-size: 13px;
        font-family: "ITC Avant Garde Gothic Std";
        font-weight: 500;
      }

      form {
        display: flex;
        margin-top: 15px;
        input {
          width: 100%;
          max-width: 270px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .btn-orange {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
      }
    } */
    .logo__engage {
      margin-top: 50px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    top: 110px;
    height: 1px;
    background-color: $colorGray-eac;
  }
}
.footerbtm {
  background-color: $colorGray-eac;

  .btm__footer {
    display: flex;
    align-items: center;
    padding-block: 20px;
    .footerbtm__copyright {
      .title__copyrigth {
        color: $firstColor;
        font-size: 12px;
        font-family: "ITC Avant Garde Gothic Std Book";
        text-transform: uppercase;
      }
    }
    /* .footerbtm__sitemap {
      margin-inline: 35px;
      ul {
        list-style: none;
        display: flex;
        a {
          color: $firstColor;
          font-size: 14px;
          font-family: "ITC Avant Garde Gothic Std Book";

          &.vertical-line {
            border-left: 1px solid $firstColor;
            margin: 0 20px;
            padding-inline: 20px;
            border-right: 1px solid $firstColor;
          }
        }
      }
    } */

    .footerbtm__social {
      /* .reseaux-social {
        list-style: none;
        display: flex;
        li {
          padding-right: 20px;
        }
      } */
    }
  }
}

/*****************************MObile*************************************/
@media (max-width: 575.98px) {
  .footer {
    .footer__top {
      flex-direction: column;
      .footer__menu {
        ul {
          flex-direction: column;
          padding: 0;
          margin-top: 20px;
          gap: 20px;
          li {
            padding-right: 0;
          }
        }
      }
      .newsletter {
        form {
          input {
            /* max-width: 165px; */
            max-width: 58%;
          }
          .btn-orange {
            font-size: 12px;
            padding: 6px 20px;
          }
        }
      }
    }

    &::after {
      top: 330px;
    }
  }

  .footerbtm {
    .btm__footer {
      flex-direction: column;
      align-items: center;

      .footerbtm__sitemap {
        margin: 0;
        order: -1;
        ul {
          padding-left: 0;
          align-items: center;
          flex-direction: column;
          gap: 10px;
          a {
            &.vertical-line {
              border: 0;
              padding-inline: 0;
            }
          }
        }
      }
      .footerbtm__social {
        margin-block: 20px;
      }
      .footerbtm__copyright {
        order: 2;
        text-align: center;
      }
    }
  }
}
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .footer {
    .footer__top {
      .footer__menu {
        ul {
          li {
            padding-right: 25px;
          }
        }
      }
      .newsletter {
        width: 485px;
      }
    }
  }

  .footerbtm {
    .btm__footer {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
  }
}
// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199.98px) {
  .footerbtm {
    .btm__footer {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
  }
}
</style>
