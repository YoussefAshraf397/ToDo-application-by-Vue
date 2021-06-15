<template>
    <Modal ref="modal" >
         <form class="app-form">
              <div class="form-control">
                  <label class="label">Title</label>
                  <input 
                  v-model="form.title"
                  class="form-input" type="text">
              </div>
                <div class="form-control form-control-last">
                  <label class="label">Description</label>
                  <textarea
                    v-model="form.description" 
                    cols="30"
                    rows="5"
                    class="form-input" >
                  </textarea>
              </div>
              <div class="app-error">
                  <div class="form-error">
                      {{formError}}
                  </div>
              </div>
              <button 
              @click="submitForm"
              type="button" class="app-button is-primary">Confirm</button>

          </form>
    </Modal>
</template>

<script>
import Modal from '@/components/Modal'
export default {
    components:{
        Modal
    },
     data() {
       return {
           form:{
               title: '',
               description: ''
           },
           formError: ''
            
           }
   },
   computed:{
       isFormValid(){
           return this.form.title && this.form.description ? true : false
       },
       modal(){
           return this.$refs.modal
       }
   },
   methods: {
       submitForm(){
           if( this.isFormValid){
            this.formError = ''
            // eslint-disable-next-line vue/custom-event-name-casing
            this.$emit('formSubmitted' , {...this.form})
            this.modal.closeModal()
            this.resetForm()
           }
           else{
               this.formError = 'From Error! title and description is required'
           }
           
       },
       resetForm(){
           this.form.title=''
           this.form.description=''
       }
   },
  
    
}
</script>

<style scoped>
.form-error{
    margin-bottom: 10px;
}
</style>