<template>
  <div class="container">
    <Logo />
    <h1>Font : TH-SarabunNew</h1>
    <h1>Law Hackathon H1</h1>
    <h2>Law Hackathon H2</h2>
    <p>สวัสดี normal</p>
    <label>test nuxt-sweetalert</label>
    <button class="btn btn-danger" @click="test">Alert</button>
    <i class="fab fa-facebook fa-2x"></i>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      this.$store.dispatch('alertFn')
    },
  },
}
</script>

<style scoped>
p,
label {
  font-size: 2rem;
}
</style>
