<template>
  <div class="app">
    <Header />
    <div class="app__main">
      <div class="app__content">
        <nuxt />
      </div>
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import Header from '~/components/app/AppHeader.vue'
// import Footer from '~/components/app/AppFooter.vue'

export default {
  components: {
    Header,
    // Footer,
  },
}
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  min-height: calc(100vh - 2 * 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__main {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>
