<script setup>
  console.log("cc")
  import Task from "/src/components/Task.vue"
import { ref } from 'vue';
  let lists = ref([]); 
  let currentIndex = ref(undefined);
  let newList = ref(''); // input qui définira ma nouvelle taskList
  let newTask = ref("");

  function updateTask(taskIndex, updatedTask){
    console.log(updatedTask,taskIndex,'ICI')
    console.log(lists.value[currentIndex.value],'show index')
    console.log(lists.value[currentIndex.value].tasks['taskIndex'],'show index')
    lists.value[currentIndex.value].tasks[taskIndex] =  updatedTask
    console.log(lists, 'updatedTask')
  }

  function addList() {
    // if (newList.value.trim() !== '') {
      const newListObject = { name: newList.value, tasks: [] };
      lists.value.push(newListObject);
      newList.value = ''; // Réinitialisez le champ d'entrée
      console.log(newList.value,'newlist')
    // }
    console.log(lists.value,'lists');
  }


  function addTask() {
    console.log(lists.value,'lists voir new task')
    console.log(lists.value[currentIndex.value],'lists voir new task')
    lists.value[currentIndex.value].tasks.push({taskName: newTask.value, taskBody: '', taskUser: 0});
    newTask.value = ""
    console.log(lists.value,'lists voir new task')
  }
  function setListIndex(newIndex){
    currentIndex.value = newIndex;
    console.log(currentIndex.value,'currentIndex')
    console.log(lists.value[currentIndex.value],'list[currentIndex]')
  }

  function deleteTask(currentTask){
    lists.value[currentIndex.value].tasks = lists.value[currentIndex.value].tasks.filter((task, index) => index !== currentTask);
    console.log(lists, 'lists[currentIndex].tasks[currentTask]')
  }


</script>

<template>
<div class="h-screen w-full flex flex-col">

  
  <div class="flex flex-row justify-center items-center bg-emerald-200 p-5 space-x-4">
    <input @input="newList = $event.target.value" @value="newList" v-model="newList" class="rounded-[8px] p-2" type="text" placeholder="nouvelle liste"/>
    <button @click="addList" class="rounded-[12px] bg-emerald-300 p-3 border border-cyan-100">Nouvelle liste</button>
  </div>
  
  <div class="flex align-center flex-wrap bg-emerald-200 p-5 h-full w-full">
    <div  v-for="(list, index) in lists" @click="setListIndex(index)" :key="index" class="w-[300px] h-[600px] flex flex-col   border-2 border-emerald-50 bg-emerald-100 m-3 p-5 rounded-[6px]">
        <div class="h-[15%]">
          <button class="bg-emerald-50 p-3 rounded-[12px] border-2 border-emerald-300 text-2xl w-3/4" >{{list.name}}</button>
        </div>
     
        <div  class="h-[65%] flex flex-col space-y-[6px] " >
          <div  v-if="lists[index].tasks[0] != undefined" v-for="(task, tindex) in lists[index].tasks" :key="taskIndex">
            <Task :updateTask="updateTask" :task="task" :tindex="tindex" :deleteTask="deleteTask"></Task>
          </div>
        </div>
        <div v-if="currentIndex != undefined && currentIndex === index" class="flex flex-col h-[15%] space-y-3 mt-5%">
          <input type="text" class="p-3 border border-emerald-50 rounded-[12px]" placeholder="nouvelle liste" v-model="newTask" @input="newTask = $event.target.value" />
          <button class="p-3 rounded-[6px] bg-emerald-300 " @click="addTask">Ajouter une nouvelle tache</button>   
        </div>
  
      </div>
    </div>
</div>

<!--   
<div class="flex flex-row  w-full space-x-3">
    <button class="bg-emerald-50 border border-emerald-200 pt-2 pb-2 rounded-[6px] w-11/12" @click="props.setModal('view-task')">{task.taskName}</button>
    <div class="p-2 rounded-[20px] hover:bg-gray-400"  on:click={handleDeleteTask} :key="tindex">
      <svg class="w-[18px] h-[18px] text-gray-700 " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    </div>
    {#if modal != '' }
    <Modal setModal={setModal} tindex={tindex}>
      <div slot='header'>
        <input type='text'  bind:value={newTask.taskName} class="text-3xl">
      </div>
      
      <textarea rows="4" cols="50" class="h-4/6" bind:value={newTask.taskBody}></textarea>
      <div slot="footer" class="flex flex-row space-x-6 justify-end">
        <button class="p-2 rounded-[8px] bg-teal-300" on:click={()=>{updateTask(tindex,newTask)}}>Enregistrer</button>
        <button class="p-2 rounded-[8px] bg-orange-300" on:click={()=>{setModal('')}}>Quitter</button>
      </div>
    </Modal>
    {/if}
  </div> -->
      </template>