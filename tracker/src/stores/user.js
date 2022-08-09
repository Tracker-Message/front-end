import { defineStore } from 'pinia'


export const userStore = defineStore({
  id: 'user',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  //methods
  actions: {
    increment() {
      this.counter++
    }
  }

})
