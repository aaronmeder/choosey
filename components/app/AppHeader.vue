<template>
  <header>
    <div class="container">
      <h1>
        <nuxt-link to="/">choosey</nuxt-link>
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
  padding-bottom: $sizing-l;
  text-align: center;
}

h1 {
  margin: 0;
}

.slogan {
  @include small {
    display: none;
  }
}

a {
  color: black;
  text-decoration: none;
}
</style>
