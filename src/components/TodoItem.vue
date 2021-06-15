<template>
     <div v-if="!editMode" class="todo-item">
            <div class="todo-item-conetent">
              <div class="todo-item-conetent-title">
                {{title}}
              </div>
              <div class="todo-item-conetent-description">
                {{description}}
              </div>
              <div class="todo-item-conetent-buttons" >
                <button 
                  @click="editMode=true"
                class="app-button is-warning">Edit</button>
               <button
                  @click="deleteTodo" 
               class="app-button is-danger">Delete</button>
              </div>
            </div>

    </div>
    <div v-else class="todo-item">
      <form class="app-form">
              <div class="form-control">
                  <label class="label">Title</label>
                  <input 
                  v-model="todo.title"
                  class="form-input" type="text">
              </div>
                <div class="form-control form-control-last">
                  <label class="label">Description</label>
                  <textarea 
                    v-model="todo.description"
                    cols="30"
                    rows="2"
                    class="form-input" >
                  </textarea>
              </div>
              <div class="todo-item-conetent-buttons" >
                <button 
                  @click="editTodo"
                  type="button"
                class="app-button is-warning">Update</button>
               <button
                  @click="editMode= false" 
               class="app-button is-danger">Cancel</button>
              </div>

          </form>

    </div>
</template>


<script>
import store from '@/store'
// import Vue from 'vue'
export default{
   props:{
       title:{
           type: String ,
           required: true ,
           default: 'This is default title'
       },
       description:{
           type: String ,
            required: true,
            default: 'This is default description'
       },
       _id: {
         type: String ,
         required: true
       }
   },
   data() {
     return {
       editMode: false ,
       todo: {  
         _id: this._id ,
         title: this.title ,
         description: this.description
       },
       
      todoos: store.state.todos
   
   }
   },
   methods: {
     editTodo(){
      // store.dispatch('updateTodo' , {...this.todo})
      const index = store.state.todos.findIndex((todo) => {
          return todo._id === this.todo._id
        })
        this.todoos[index] = this.todo
        this.editMode = false
     },
     deleteTodo(){
      // store.dispatch('deleteTodo', this.todo._id)
      const index = store.state.todos.findIndex((todo) => {
         return todo._id == this.todo._id
      })

      this.todoos.splice(index, 1)
  }
   },
}
</script>


<style scoped>
.todo-item{
  background: gray;
  min-height: 70px;
  margin: 10px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-size: 23px;
}

.todo-item-conetent-title{
  font-weight: bold;
}
.todo-item-conetent-buttons{
  margin-top:10px ;
}

.todo-item-conetent-description{
  font-size: 19px;
}

.app-button{
  font-size: 15px;
}
</style>