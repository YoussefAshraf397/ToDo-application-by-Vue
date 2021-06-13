<template>
     <div class="todo-item">
            <div class="todo-item-conetent">
              <div class="todo-item-conetent-title">
                {{title}}
              </div>
              <div class="todo-item-conetent-description">
                {{description}}
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
   }
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

.todo-item-conetent-description{
  font-size: 19px;
}
</style>