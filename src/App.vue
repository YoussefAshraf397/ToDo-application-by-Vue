<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
       <TodoList :todos="todos"/>
        <div class="todo-create-btn-container">
          <TodoCreate  @formSubmitted="createTodo"/>
      </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoCreate from '@/components/TodoCreate'
import store from '@/store'
export default {
  name: 'App',
  components: {
    TodoList,
    TodoCreate
  },

  data() {
    return {
      isOpenModal: false ,
      todos: store.state.todos
    }
  },  

  created() {
},
methods: {
  createTodo(todo){
      //  store.dispatch('createTodo' , todo)
      todo._id = Math.random().toString(36).substring(2,7)
      this.todos.push(todo)
}
},

}

</script> 

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}



.todo-container {
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 200px;
  background-color:#ededed ;
  border-radius: 5px;
}

.todo-wrapper {
display: flex;

justify-content: center;
width: 100%;
}






.todo-create-btn-container{
  margin: 10px;
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.is-primary{
  background-color:#3cab3c ;
}
.is-warning{
  background-color:#ffa753 ;
  margin-right: 5px;
}
.is-danger{
  background-color:#ff5a5a ;
}

.label{
    
display: block;
font-size: 18px;
font-weight: bold;

}
.form-input{
    padding: 10px;
    font-size: 17px;
}

.form-control{
    margin-bottom:10px ;
}
.app-error{
  color: red;
}

.form-control-last{
  margin-bottom:0px ;
}

</style>
