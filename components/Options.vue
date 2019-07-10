<template>
  <section class="options">
    <h1>Your Options</h1>
    <form action="" method="POST">
      <p v-for="option in options" :key="option.index">
        <label for="option1">{{ option.index }}</label>
        <input
          v-model="option.value"
          name="option1"
          type="text"
          class="option"
          value=""
          placeholder="Enter an Option"
        />
      </p>
      <p class="add-item">
        <label for="option1"></label>
        <button
          v-if="!isAdding"
          class="btn btn--add-item"
          @click="isAdding = !isAdding"
        >
          + Add Option
        </button>
        <div
          v-if="isAdding"
          class="adding-item__fields"
        >
          <input
            v-model="newOption"
            name="option1"
            type="text"
            class="option"
            value=""
          />
          <div class="adding-item__actions">
            <button class="btn btn--positive save-item" @click="addItem">Add Option</button>
            <button class="btn btn--negative cancel-add-item" @click="cancelAddItem">x</button>
          </div>
        </div>
      <!-- eslint-disable-next-line -->
      </p>
      <p class="form__actions">
        <button
          class="btn btn--large btn--primary"
          @click="submitForm"
        >
          Decide for me
        </button>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      isAdding: false,
      options: [
        { value: '' },
        { value: '' }
      ],
      newOption: ''
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
      if(this.newOption !== '') {

        // save the new option
        this.options.push({ value: this.newOption });

        // reset new option field
        this.newOption = '';

      }
    },
    cancelAddItem(event) {
      event.preventDefault()
      // reset add item status
      this.isAdding = false;
      // reset new option field
      this.newOption = '';
    },
    submitForm(event) {
      event.preventDefault()

      // save option that is currently beeing edited
      if(this.newOption !== '') {
        this.options.push({ value: this.newOption });
      }

      // decide which option wins
      const winningOption = this.getRandomOption(this.options)

      // save infos to store
      this.saveResults(this.options, winningOption)

      // redirect to success page
      this.$router.push({
        path: '/winner'
      })
    },
    getRandomOption(options) {
      return options[Math.floor(Math.random() * options.length)]
    }
  }
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

