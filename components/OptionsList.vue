<template>
  <section class="options">
    <h2>Your Options</h2>
    <form action="" method="POST">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="option-wrapper"
      >
        <input
          v-model="option.value"
          type="text"
          class="option"
          value=""
          autocomplete="off"
          :data-index="index"
          @click="onInputClicked"
          @blur="onInputBlur"
        />
        <button
          class="btn btn--dangerous btn--delete btn--icon-only"
          :data-index="index"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
      <div class="add-item">
        <!-- <label for="option1"></label> -->
        <button
          class="btn btn--ghost btn--sm btn--add-item"
          @click.prevent="addOption"
        >
          + Add Another Option
        </button>
      </div>
      <div class="form__actions">
        <div v-if="error" class="errors notification-bar">
          {{ error }}
        </div>
        <button class="btn btn--large btn--primary" @click="submitForm">
          Choose for me
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: [{ value: '' }, { value: '' }],
      error: '',
    }
  },
  methods: {
    addOption() {
      this.options.push({ value: '' })
    },
    onInputClicked(event) {
      // find option wrapper
      // const thisOptionIndex = event.target.dataset.index
      const thisOptionWrapper = event.target.closest('.option-wrapper')
      thisOptionWrapper.classList.add('focused')
    },
    onInputBlur(event) {
      // find option wrapper
      const thisOptionWrapper = event.target.closest('.option-wrapper')
      thisOptionWrapper.classList.remove('focused')
    },
    saveResults(allOptions, winningOption) {
      this.$store.commit('options/saveAllOptions', allOptions)
      this.$store.commit('options/saveWinningOption', winningOption)
    },
    submitForm(event) {
      event.preventDefault()
      this.errors = ''

      // filter out empty options
      const validOptions = this.options.filter(
        (option) => option.value.length > 0 && option.value !== ''
      )

      // abort if there are no valid options
      if (validOptions.length === 0) {
        this.error = 'You are giving me an impossible choice to make 🙈'
        return
      }

      // decide which option wins
      const winningOption = this.getRandomOption(validOptions)

      // save infos to store
      this.saveResults(validOptions, winningOption)

      // redirect to success page
      this.$router.push({
        path: '/winner',
      })
    },
    getRandomOption(options) {
      return options[Math.floor(Math.random() * options.length)]
    },
  },
}
</script>

<style lang="scss" scoped>
.option-wrapper {
  --button-width: 50px;
  --button-spacing: 1rem;
  --app-outer-spacing: 2rem;
  margin-right: calc(-1 * var(--app-outer-spacing));
  margin-left: calc(-1 * var(--app-outer-spacing));
  padding-right: var(--app-outer-spacing);
  padding-left: var(--app-outer-spacing);
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;

  &.focused {
    button {
      transform: translateX(calc(-1 * var(--app-outer-spacing)));
    }

    input {
      width: calc(100% - var(--button-width) - var(--button-spacing));
    }
  }

  input {
    width: 100%;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 50px;
    width: 50px;
    transform: translateX(100px);
    transition: transform 350ms ease-out;

    @media only screen and (min-width: 700px) {
      transform: translateX(50vw);
    }
  }
}
</style>
