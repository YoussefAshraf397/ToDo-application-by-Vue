<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
       <TodoList :todos="todos"/>
        <div class="todo-create-btn-container">
        <div class="app-button">
          Create
        </div>
      </div>
      </div>
    </div>
    <div class="modal">
      <div class="modal-content">
        modal window

      </div>

    </div>
  </div>
</template>

<script>
import playground from './playground'
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  },

  data() {
    return {
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
    }
  },


  created() {
  playground()
}
}

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo-container {
  width: 400px;
  height: 400px;
  background-color:#ededed ;
  border-radius: 5px;
}

.todo-wrapper {
display: flex;

justify-content: center;
width: 100%;
}

.modal{
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color:rgba(0, 0, 0, 0.4) ;
}

.modal-content{
  background-color:#fefefe ;
  margin: 15% auto;
  padding:20px ;
  border: 1px solid #888;
  width: 80%;
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;
}

</style>
