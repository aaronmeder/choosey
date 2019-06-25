<template>
  <div class="app-wrapper">
    <Header />
    <div class="container app-content-container app-content">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/app/Header.vue'
import Footer from '~/components/app/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
