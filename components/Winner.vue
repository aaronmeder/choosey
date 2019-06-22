<template>
  <section class="decision">
    <h2>And the winner is...</h2>
    <p class="decision__winner">
      {{ this.$route.params.winningOption }}
    </p>

    <p>Out of the options <span class="decision__option">1</span>.</p>
  </section>
</template>

<style lang="sass" scoped></style>
