<template>
  <section class="options">
    <p class="instructions">From what options do you want to decide?</p>
    <form>
      <p v-for="option in options" :key="option.index">
        <label for="option1">{{ option.index }}</label>
        <input
          v-model="option.value"
          name="option1"
          type="text"
          class="option"
        />
      </p>
      <p class="actions">
        <button @click="submitForm">Decide for me</button>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      options: [
        { value: 'Local Data Option One' },
        { value: 'Local Data Option Two' }
      ]
    }
  },
  methods: {
    saveResults(allOptions, winningOption) {
      this.$store.commit('options/saveAllOptions', allOptions)
      this.$store.commit('options/saveWinningOption', winningOption)
    },
    submitForm(event) {
      event.preventDefault()

      // decide which options wins
      const winningOption = this.getRandomOption(this.options)
      console.log(winningOption) // eslint-disable-line

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
