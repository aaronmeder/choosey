<template>
  <header>
    <div class="container">
      <h1>
        <nuxt-link to="/">Choosey</nuxt-link>
      </h1>
      <div class="slogan">Easy Breezy Decisions</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import 'assets/css/basics/variables';

header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  text-align: center;
}

h1 {
  margin: 0;
}

a {
  color: $good-night-dark;
  text-decoration: none;
}
</style>
