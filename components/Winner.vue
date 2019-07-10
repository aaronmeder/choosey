<template>
  <section class="decision">
    <p class="decision__intro">🎉 And the winner is...</p>
    <h1 class="decision__winner">{{ data.winningOption.value }}</h1>

    <p class="decision__options">
      Chosen out of the options
      <span
        v-for="option in data.allOptions"
        :key="option.index"
        class="decision__option"
        v-text="option.value"
      ></span>
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
  &__options {
    color: $smokey-smoke-light;
  }

  &__option {
    &:last-of-type {
      &::after {
        content: '.';
      }
    }

    &::after {
      content: ', ';
    }
  }
}
</style>
