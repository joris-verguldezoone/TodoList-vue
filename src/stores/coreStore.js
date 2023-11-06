import { defineStore } from "pinia";

export const useCoreStore = defineStore({
  id: "coreStore",
  state: () => ({
    user : {
      email:"",
      firstname:"",
      lastname:"",
    },
    formLogin: {
      email: "",
      password: "",
    },
    formRegister: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
    },
  }),
  actions: {
   
    async register() {
      if (this.formRegister.password === this.formRegister.confirmPassword) {
        let formData = new FormData();
        formData.append('user', JSON.stringify(this.formRegister));
        const data = await fetch(`http://localhost/backend_php/traitement.php?user`, {
          method:'POST',
          body:formData,
        });
        console.log(data.ok, "result register");
        return true
      } else {
        console.log("confirm password incorrect");
        return false
      }
    },
    async connexion(){
      try {
        console.log(this.$state,'state')
        // console.log(formLogin,'state')
        console.log(this.formLogin,'toto');
        let formData = new FormData()
        
        formData.append('signin',JSON.stringify(this.formLogin))
        const data = await fetch('http://localhost/backend_php/traitement.php?signin',{
          method:'POST',
          body:  formData
        });
        let result = await data.json()
        
        Object.assign(this.user, result);
        console.log(this.user, 'this.user')
        
        return true
      } catch (error) {
        return false 
      }
        
   
    }
  },
});
