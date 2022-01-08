<template>
  <section class="options">
    <h2>Enter Your Options</h2>
    <form action="" method="POST">
      <div v-for="option in options" :key="option.index">
        <label for="option1">{{ option.index }}</label>
        <input
          v-model="option.value"
          name="option1"
          type="text"
          class="option"
          value=""
          placeholder="Enter an Option"
          autocomplete="off"
        />
      </div>
      <div class="add-item">
        <label for="option1"></label>
        <button
          v-if="!isAdding"
          class="btn btn--add-item"
          @click="isAdding = !isAdding"
        >
          + Add Option
        </button>
        <div v-if="isAdding" class="adding-item__fields">
          <input
            v-model="newOption"
            name="option1"
            type="text"
            class="option"
            placeholder="Enter an Option"
            value=""
            autocomplete="off"
          />
          <div class="adding-item__actions">
            <button class="btn btn--positive save-item" @click="addItem">
              Add Option
            </button>
            <button
              class="btn btn--negative cancel-add-item"
              @click="cancelAddItem"
            >
              x
            </button>
          </div>
        </div>
      </div>
      <div class="form__actions">
        <div v-if="error" class="errors">
          {{ error }}
        </div>
        <button class="btn btn--large btn--primary" @click="submitForm">
          Decide for me
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isAdding: false,
      options: [{ value: '' }, { value: '' }],
      newOption: '',
      error: '',
    }
  },
  methods: {
    saveResults(allOptions, winningOption) {
      this.$store.commit('options/saveAllOptions', allOptions)
      this.$store.commit('options/saveWinningOption', winningOption)
    },
    addItem(event) {
      event.preventDefault()
      // if item isn't empty...
      if (this.newOption !== '') {
        // save the new option
        this.options.push({ value: this.newOption })

        // reset new option field
        this.newOption = ''
      }
    },
    cancelAddItem(event) {
      event.preventDefault()
      // reset add item status
      this.isAdding = false
      // reset new option field
      this.newOption = ''
    },
    submitForm(event) {
      event.preventDefault()
      this.errors = ''

      // save option that is currently beeing added
      if (this.newOption.value !== '') {
        this.options.push({ value: this.newOption })
      }

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
.adding-item {
  &__actions {
    display: block;
    margin-top: 0.5rem;
  }
}
</style>
