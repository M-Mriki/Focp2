<template>
  <div>
    <button @click="modalShow = !modalShow">
      <img src="@/assets/images/icon-search.svg" alt="Logo">
    </button>
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
<style lang="">
</style>
