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
import Header from '~/components/app/AppHeader.vue'
import Footer from '~/components/app/AppFooter.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.app-main {
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  min-height: calc(100vh - 125px);
}

.app-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>
