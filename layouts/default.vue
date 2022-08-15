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

<style lang="scss" scoped></style>
