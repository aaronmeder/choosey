<template>
  <section class="options">
    <p class="instructions">From what options do you want to decide?</p>
    <form action="" method="POST">
      <p v-for="option in options" :key="option.index">
        <label for="option1">{{ option.index }}</label>
        <input
          v-model="option.value"
          name="option1"
          type="text"
          class="option"
          value=""
        />
      </p>
      <p class="add-item">
        <label for="option1"></label>
        <button 
          v-if="!isAdding" 
          class="btn btn--add-item" 
          @click="isAdding = !isAdding" 
        >
          Add Item
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
          <button class="btn btn--save-item" @click="addItem">Save Item</button> <button class="btn btn--cancel-add-item" @click="cancelAddItem">x</button>
        </div>
      <!-- eslint-disable-next-line -->
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
      isAdding: false,
      options: [
        { value: 'Local Data Option One' },
        { value: 'Local Data Option Two' }
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
