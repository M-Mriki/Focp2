<template>
  <div>
    <section class="SavierVous">
      <TemplatesTSavieVous />
    </section>
    <section class="TheCoeurs">
      <TAuCoeurs />
    </section>
    <section class="CartesIntercatives">
      <TCarteInteractive />
    </section>
    <section class="TheChiffres">
      <TChiffres />
    </section>
    <section class="TheHumains">
      <THumains />
    </section>
    <section class="TheNews">
      <TActualites />
    </section>
    <section class="TheDeVousNous">
      <TDeVousNous />
    </section>
    <section class="TheRapports">
      <TRapport />
    </section>
  </div>
</template>

<script>
import TAuCoeurs from '@/components/Templates/T-AuCoeurs.vue'
import TCarteInteractive from '@/components/Templates/T-CarteInteractive.vue'
import TChiffres from '~/components/Templates/T-Chiffres.vue'
import THumains from '~/components/Templates/T-Humains.vue'
import TActualites from '~/components/Templates/T-Actualites.vue'
import TRapport from '~/components/Templates/T-Rapport.vue'
import TDeVousNous from '~/components/Templates/T-DeVousNous.vue'
export default {
  components: {
    TAuCoeurs,
    TCarteInteractive,
    TChiffres,
    THumains,
    TActualites,
    TRapport,
    TDeVousNous
  },
  data () {
    return {}
  },
  head () {
    return {
      title: 'FOCP - Accueil',

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'f ocp ...'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'movie, strem,stremaing'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.SavierVous {
  background: linear-gradient(
    177deg,
    rgba(225, 225, 225, 1) 13%,
    rgba(225, 225, 225, 1) 30%,
    rgba(244, 244, 244, 0.4125000341933649) 66%
  );
}
.TheHumains {
  background: linear-gradient(
      177deg,
      rgba(225, 225, 225, 1) 13%,
      rgba(225, 225, 225, 1) 30%,
      rgba(244, 244, 244, 0.4125000341933649) 66%
    ),
    url("@/assets/images/back-humain.png");
}
.TheNews {
  background-color: $colorGray-eac;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    background: url("@/assets/images/actualite-left.png") no-repeat left center;
    height: 100%;
    width: 100%;
    top: 0;
    left: -30px;
  }
}

/**************************** MOBILE **************************************/
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .TheNews {
    &::after {
      background: url("@/assets/images/actualite-left.png") no-repeat;
      height: 100%;
      width: 100%;
      top: 0;
      /* left: -30px; */
      transform: rotate(-180deg);
      right: 0;
      bottom: 0;
      background-position: -15% 100%;
    }
  }
}
</style>
