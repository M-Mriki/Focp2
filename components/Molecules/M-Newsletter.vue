<template lang="">
  <div>
    <div class="newsletter">
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
.newsletter {
  margin-top: 50px;
  .newsletter__title {
    margin-bottom: 0;
    color: $firstColor;
    font-size: 20px;
    font-family: "ITC Avant Garde Gothic Std Demi";
  }
  .newsletter__soustitle {
    color: #444444;
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
}
</style>
