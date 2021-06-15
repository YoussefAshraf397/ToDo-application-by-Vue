<template>
     <div class="todo-item">
            <div class="todo-item-conetent">
              <div class="todo-item-conetent-title">
                {{title}}
              </div>
              <div class="todo-item-conetent-description">
                {{description}}
              </div>
              <div class="todo-item-conetent-buttons" >
                <button 
                  @click="editTodo"
                class="app-button is-warning">Edit</button>
               <button
                  @click="deleteTodo" 
               class="app-button is-danger">Delete</button>
              </div>
            </div>

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