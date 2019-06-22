<template>
  <section class="decision">
    <p>And the winner is...</p>
    <h2 class="decision__winner">🎉 {{ data.winningOption.value }}</h2>

    <p class="decision__all_options">
      Chosen out of the options
      <span
        v-for="option in data.allOptions"
        :key="option.index"
        class="decision__option"
      >
        {{ option.value }}
      </span>
      .
    </p>
  </section>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.options
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/basics/variables';

.decision {
  &__option {
    display: inline-block;
    margin-right: 5px;
    padding: 3px 5px;
    border: 2px $smokey-smoke solid;
    border-radius: 5px;
    color: $smokey-smoke;
    background-color: $smokey-smoke-text;
  }
}
</style>
