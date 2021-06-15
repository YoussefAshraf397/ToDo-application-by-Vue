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
               <!-- <button
                  @click="deleteTodo" 
               class="app-button is-danger">Delete</button> -->
              </div>
            </div>

    </div>
    <div v-else class="todo-item">
      <form class="app-form">
              <div class="form-control">
                  <label class="label">Title</label>
                  <input 
                  class="form-input" type="text">
              </div>
                <div class="form-control form-control-last">
                  <label class="label">Description</label>
                  <textarea
                    cols="30"
                    rows="2"
                    class="form-input" >
                  </textarea>
              </div>
              <div class="todo-item-conetent-buttons" >
                <button 
                  @click="editMode=false"
                class="app-button is-warning">Update</button>
               <button
                  @click="deleteTodo" 
               class="app-button is-danger">Delete</button>
              </div>

          </form>

    </div>
</template>


<script>

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

       }
   },
   data() {
     return {
       editMode: false
     }
   },
   methods: {
     editTodo(){
       alert('edit')

     },
     deleteTodo(){
       alert('delete')
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