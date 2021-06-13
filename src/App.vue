<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
       <TodoList :todos="todos"/>
        <div class="todo-create-btn-container">
          <Modal  />
      </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import playground from './playground'
import TodoList from '@/components/TodoList'
import Modal from '@/components/Modal'

export default {
  name: 'App',
  components: {
    TodoList,
    Modal
  },

  data() {
    return {
      isOpenModal: false ,
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
  display: flex;
  flex-direction: column;
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






.todo-create-btn-container{
  margin: 10px;
}

</style>
