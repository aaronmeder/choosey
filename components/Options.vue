<template>
  <section class="options">
    <h2>From what options do you want to decide?</h2>
    <form>
      <p>
        <label for="option1">1</label>
        <input
          v-model="options[0]"
          name="option1"
          type="text"
          class="option"
          placeholder="Go to the cinema..."
        />
      </p>
      <p>
        <label for="option2">2</label>
        <input
          v-model="options[1]"
          name="option2"
          type="text"
          class="option"
          placeholder="Stay at home"
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
      options: ['First choice', 'Second choice']
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault()

      // decide
      const winningOption = this.getRandomOption(this.options)

      // redirect to success page
      this.$router.push({
        path: '/winner',
        params: { options: this.options, winningOption: winningOption }
      })
    },
    getRandomOption(options) {
      return options[Math.floor(Math.random() * options.length)]
    }
  }
}
</script>
