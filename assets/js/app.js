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
            /* if(i = 10)
                {
                    this.ready = true
                } */
            //this.readyCheck()
            //this.ready = true
        },
        readyCheck()
        {
            if (this.emailList.length == 10)
            {
                this.ready = true
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
        //this.readyCheck()
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