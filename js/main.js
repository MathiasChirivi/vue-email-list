//console.log("Benvenuto User");

const { createApp } = Vue
createApp({
    data(){
        return{
            emailPath: "https://flynn.boolean.careers/exercises/api/random/mail",
            emailGenerate : [],
        }
    }, 
    methods: {},
    mounted() {
        //CREATE 10 EMAIL WITH A EmailPath(This is a api of Boolean) AND PUSH IN ARRAY 
            for (let index = 0; index < 10; index++) {
                axios.get(this.emailPath).then((answer) => {
                    this.emailGenerate.push(answer.data.response)
                })
        }
    }
}).mount('#app')