<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCoreStore } from "../../stores/coreStore.js"
const coreStore = useCoreStore();

const loginForm = coreStore.formLogin;
const registerForm = coreStore.formRegister;
const isRegister = ref(null);
const router = useRouter();

const register = async () => {
    console.log('plop')
    let result = await coreStore.register();
    if(result){
        isRegister.value = true
    }
}

const login = async () => {
  let result = await coreStore.connexion();
  if (result) {
    router.push({ name: "home" });
  }}

</script>
<template>
<div v-if="isRegister === null">
    <div class="flex justify-center items-center h-screen gap-10">
    <button class="p-3 bg-emerald-300 rounded-[8px] border border-emerald-50 w-[150px]" @click="isRegister = true">S'inscrire</button>
    <button class="p-3 bg-emerald-300 rounded-[8px] border border-emerald-50 w-[150px]" @click="isRegister = false">Se connecter</button>
</div>
</div>
<div v-else-if="!isRegister" class="flex items-center justify-center h-screen">
    <form class="gap-6 bg-emerald-200 flex flex-col items-center justify-center rounded-[12px] p-12">
        <h1 class="text-center">Inscription</h1>
        <div class="gap-2 flex flex-col">
            <label for="email">email</label>
            <input @input="registerForm.email = $event.target.value" type="email" name="email" id="email" class="p-3 outline-none  rounded-[12px] focus:bg-emerald-50 focus:border-2 focus:border-teal-300">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="firstname">Prénom</label>
            <input @input="registerForm.firstname = $event.target.value" type="text" name="firstname" id="firstname" class="p-3 outline-none  rounded-[12px] focus:bg-emerald-50 focus:border-2 focus:border-teal-300">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="lastname">Nom</label>
            <input @input="registerForm.lastname = $event.target.value" type="text" name="lastname" id="lastname" class="p-3 outline-none  rounded-[12px] focus:bg-emerald-50 focus:border-2 focus:border-teal-300">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="password">Mot de passe</label>
            <input @input="registerForm.password = $event.target.value" type="password" name="password" id="password" class="p-3 outline-none  rounded-[12px] focus:bg-emerald-50 focus:border-2 focus:border-teal-300">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="confirm_password">Confirmation du mot de passe</label>
            <input @input="registerForm.confirmPassword = $event.target.value" type="password" name="confirm_password" id="confirm_password" class="p-3 outline-none  rounded-[12px] focus:bg-emerald-50 focus:border-2 focus:border-teal-300">
        </div>
        <button @click="register" class="rounded-[12px] w-[125px] bg-emerald-300 p-3 border border-cyan-100" type="button">S'inscrire</button>
        <span>Vous avez déjà un compte ? <button @click="isRegister = true" type='button' class="underline text-teal-500">Connexion</button></span>
    </form>
</div>

<div v-else-if="isRegister" class="flex items-center justify-center h-screen">
    <form class="gap-6 bg-emerald-200 flex flex-col items-center justify-center rounded-[12px] p-12">
        <h1 class="text-center">Connexion</h1>
        <div class="gap-2 flex flex-col">
            <label for="email">email</label>
            <input @input="loginForm.email = $event.target.value"  type="email" name="email" id="email" class="">
        </div>
        <div class="gap-2 flex flex-col">
            <label for="password">Mot de passe</label>
            <input @input="loginForm.password = $event.target.value" type="password" name="password" id="password" class="">
        </div>
        <button @click="login" class="rounded-[12px] w-[125px] bg-emerald-300 p-3 border border-cyan-100" type="button">Se connecter</button>
        <span>Vous n'avez pas de compte ? <button @click="isRegister = false" type='button' class="underline text-teal-500">Inscription</button></span>
    </form>
</div>

 
</template>