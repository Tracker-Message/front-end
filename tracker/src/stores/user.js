import { defineStore } from 'pinia'


export const userStore = defineStore('authUser',
{
  state:()=>{
   /* return {
      useremail:"adm@email.com",
    };*/
    
  },
  actions:{
    alertii(){
      console.log("Ok");
    }
    
  },


/* // id: 'user',
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
  }*/

})
