//console.log("Benvenuto User");

const { createApp } = Vue
createApp({
    data(){
        return{
            emailGenerate : [],
        }
    }, 
    methods: {},
    mounted() {
            for (let index = 0; index < 10; index++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((answer) => {
                    this.emailGenerate.push(answer.data.response)
                })
        }
    }
}).mount('#app')