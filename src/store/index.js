import Vue from 'vue'

const store = {
    state: {
        todos:[
            {
              _id:"1",
              title:"Test Title 1111",
              description: "Test Description"
            },
             {
              _id:"2",
              title:"Test Title 2222222222",
              description: "Test Description"
            },
             {
              _id:"3",
              title:"Test Title 3333333",
              description: "Test Description"
            },
          ]

    } ,
    actions:{
      createTodo(state , todo){
        todo._id = Math.random().toString(36).substring(2,7)
        state.todos.push(todo)
      }, 
      updateTodo(state, todoToUpdate) {
        const index = state.todos.findIndex((todo) => {
          return todo._id === todoToUpdate._id
        })
        Vue.set(state.todos, index, todoToUpdate)
    } ,
    deleteTodo(state, todoId) {
      const index = state.todos.findIndex((todo) => {
        return todo._id === todoId
      })

      state.todos.splice(index, 1)
    }
  }
   
}



store.dispatch = function(action , payload){
  if(!this.actions[action]) throw new Error(`Action ${action} not defined in our store`)

  return this.actions[action](this.state , payload)
}



export default store 