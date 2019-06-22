<template>
  <div>
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

<style></style>
