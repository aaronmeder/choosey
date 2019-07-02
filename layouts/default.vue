<template>
  <div class="app-wrapper">
    <Header />
    <div class="app-main">
      <div class="app-content">
        <nuxt />
      </div>
      <Footer />
    </div>
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
.app-main {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  min-height: calc(100vh - 100px);
}

.app-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>
