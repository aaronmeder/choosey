export const state = () => ({
  allOptions: [],
  winningOption: {}
})

export const mutations = {
  saveAllOptions(state, options) {
    state.allOptions = options
  },
  saveWinningOption(state, winningOption) {
    state.winningOption = winningOption
  }
}
