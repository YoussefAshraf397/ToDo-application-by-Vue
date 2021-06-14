<template>
    <Modal ref="modal" >
         <form class="app-form">
              <div class="form-control">
                  <label class="label">Title</label>
                  <input 
                  v-model="form.title"
                  class="form-input" type="text">
              </div>
                <div class="form-control">
                  <label class="label">Description</label>
                  <textarea
                    v-model="form.description" 
                    cols="30"
                    rows="5"
                    class="form-input" >
                  </textarea>
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
           forceClose: false
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
            // eslint-disable-next-line vue/custom-event-name-casing
            this.$emit('formSubmitted' , {...this.form})
            this.modal.closeModal()

            // this.forceClose=true
            // this.$nextTick(() => this.forceClose=false)

            this.resetForm()
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

</style>