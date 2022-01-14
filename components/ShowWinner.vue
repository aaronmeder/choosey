<template>
  <section class="decision">
    <p class="decision__intro">🎉 And the {{ winnerVerb }} winner is...</p>
    <h1 class="decision__winner">{{ options.winningOption.value }}</h1>

    <div class="decision__options">
      <div
        v-if="options.allOptions.length > 1"
        class="decision__options--multiple"
      >
        Chosen out of the options
        <span
          v-for="option in options.allOptions"
          :key="option.index"
          class="decision__option"
          v-text="option.value"
        ></span>
      </div>

      <div v-else class="decision__options--single">which won unrivalled.</div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    options() {
      return this.$store.state.options
    },
    winnerVerb() {
      if (this.options.allOptions.length === 1) {
        return 'easy'
      } else {
        return ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/basics/variables';

.decision {
  &__options {
    color: black;
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
