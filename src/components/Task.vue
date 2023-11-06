<script setup>
import { ref, defineProps } from 'vue';
import Modal from "../components/layout/Modal.vue"

const props = defineProps({
    task: {
        taskName: String,
        taskBody: String,
        taskUser: Number
    },
    tindex : Number,
    deleteTask: Function,
    updateTask: Function

})


  let updatedTask = ref({taskName: props.task.taskName, taskBody: props.task.taskBody, taskUser:props.task.taskUser})
  //  props
  let modal = ref(''); // 
//   let taskList = ref([]); // init des taches éventuellement fetch

  function handleDeleteTask(){
    props.deleteTask(props.tindex)
  }

  

  function setModal(currentModal){
    modal.value = currentModal
    console.log(modal.value,'modal');
  }

</script>
<template>
    <div class="flex flex-row  w-full space-x-3">
        <button class="bg-emerald-50 border border-emerald-200 pt-2 pb-2 rounded-[6px] w-11/12" @click="setModal('view-task')">{{task.taskName}}</button>
        <div class="p-2 rounded-[20px] hover:bg-gray-400"  @click="handleDeleteTask" :key="props.tindex">
            <svg class="w-[18px] h-[18px] text-gray-700 " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>
        <Modal v-if="modal != ''" :setModal="setModal" :tindex="props.tindex">
        <div slot='header'>
            <input type='text'  @input="updatedTask.taskName = $event.target.value" v-model="props.task.taskName" class="text-3xl">
        </div>

        <div slot="main">
            <textarea rows="4" cols="50" class="h-4/6" v-model="props.task.taskBody" @input="updatedTask.taskBody = $event.target.value"></textarea> 
        </div>

        <div slot="footer" class="flex flex-row space-x-6 justify-end">
            <button class="p-2 rounded-[8px] bg-teal-300" @click="props.updateTask(props.tindex,updatedTask),setModal('')">Enregistrer</button>
            <button class="p-2 rounded-[8px] bg-orange-300" @click="setModal('')">Quitter</button>
        </div>
        </Modal>
    </div>
</template>
  
