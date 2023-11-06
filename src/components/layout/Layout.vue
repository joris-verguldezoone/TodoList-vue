<script setup>
import { onMounted, ref } from "vue";
// import Vue from "../../../public/Vue.svg"


onMounted(async () => {
  // await coreStore.setToken();
  // await coreStore.setPayload();
});
</script>
<template>
    <div>
      <div class="flex flex-row space-x-4 items-center ml-5">
        <img src="/public/Vue.png" class="h-[70px] w-[70px]" alt="Logo Vite">
        <div>
        <router-link
          to="/home"
          class="flex justify-center items-center "
        >
        <span>
          Accueil
        </span>
        </router-link>
        </div>
        <div>
        <router-link
          to="/auth"
          class="flex justify-center items-center "
        >
        Auth
        </router-link>
        </div>
        <div>
        <router-link
          to="/auth"
          class="flex justify-center items-center "
        >
        <span>

          Super Reminder
        </span>
        </router-link>
        </div>
      </div>

        <div class="flex-1 py-[3.5rem] bg-emerald-50"> 
          <!-- ça c'est le main  -->
          <router-view></router-view>
        </div>
    </div>
    
</template>
