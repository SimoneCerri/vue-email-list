let {createApp} = Vue;

createApp
({
    data()
    {
        return{
            emailList: [],
            ready: false
        }
    },
    methods:
    {
        createEmailOnce()
        {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>
            {
                let emailObj = response.data.response
                this.emailList.push(emailObj)
            })
        },
        createEmailsX10()
        {
            let i = 0
            while(i < 10)
            {
                this.createEmailOnce()
                i++
            }
            console.log(this.emailList);
        },
        readyCheck()
        {
            if (this.emailList.length = 10)
            {
                ready = true
            }
            console.log(this.ready);
        }
    },
    setup()
    {

    },
    beforeMount()
    {
        this.createEmailsX10()
        this.readyCheck()
    },
    created()
    {
        //this.readyCheck()
    },
    mounted()
    {
        
    },
    updated()
    {

    }
}).mount("#app")