<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    setModal: String,
    tindex: Number,
});
  
</script>
<template>
    <div class="top-0 right-0 absolute z-3 opacity-50 bg-gray-200 h-screen w-full" :key="props.tindex" @click="props.setModal('')" ></div>
    <div class="absolute z-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 h-[500px] w-[500px] p-5 rounded-[8px] flex flex-col justify-between">
        <slot name="header">
        </slot>
         <slot></slot>
        <slot name="footer">
        </slot>
</div>
</template>