//console.log("Ciah");

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
        createEmails()
        {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>
            {
                //console.log(response.data.response);
                let emailObj = response.data.response
                this.emailList.push(emailObj) 
                //console.log(this.emailList);
            })
        },
        createEmails_10()
        {
            let i = 0
            while (i < 10)
            {
                this.createEmails()
                i++
            }
            console.log(this.emailList);
            //this.readyCheck()
            //console.log(this.ready);
        },
        readyCheck()
        {
            if (this.emailList.length === 10)
            {
                ready = true
            }
            console.log(this.ready);
        }
    },
    created()
    {
        this.createEmails_10()
    },
    mounted()
    {
        /* this.createEmails(),
        this.createEmails(),
        this.createEmails(),
        this.createEmails(),
        this.createEmails(),
        this.createEmails(),
        this.createEmails(),
        this.createEmails(),
        this.createEmails(),
        this.createEmails() */
        /* let i = 0
        while (i<10)
        {
            this.createEmails()
            i++
        } */
        //console.log(this.emailList.length);
        //console.log(this.ready);
        //console.log(this.emailList);
        this.readyCheck()
        //console.log(this.ready);


    },
    updated()
    {
        /* this.readyCheck()
        console.log(this.ready); */
    }
}).mount("#app")