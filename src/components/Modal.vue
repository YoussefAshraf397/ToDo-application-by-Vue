<template>

<div>
    <div @click="isOpen = true"
         class="app-button">
          Create
        </div>
    <div class="modal"  :class="{'is-active': isOpen}">
      <div class="modal-content">
          <span @click="closeModal" class="close">&times;</span>
          <slot />
      </div>
    </div>
</div>

   
</template>

<script>

export default {
   data() {
       return {
           isOpen: false , 
       }
   },
   methods: {
       closeModal(){
           this.isOpen=false
       }
   },
   props:{
       close: {
           type: Boolean,
           required: false
       }
   },
   watch:{
       close(isClose){
           if(isClose && this.isOpen){
               this.isOpen = false
           }
       }
   }
  
}
</script>


<style scoped>
.modal.is-active{
    display: block;
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
  text-align: left;
}
.close{
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

</style>