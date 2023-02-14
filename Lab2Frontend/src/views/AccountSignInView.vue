<script>
import { signIn } from '../activity-finder-client.js';


export default{
    props: {
        user: Object,
    },
    
    data(){
        return{
            account:{
                id: '',
                username: "",
                password: "",
            },
            errors: [],
            currentState: ""    
        }
    },
    
    methods: {
        
        accountSignIn(){
            signIn(this.account.username, this.account.password, (errors, account) => { //errors, account come from the backend and can be used locally beneath, with this.account.id the return gets redifined with the local values!
            this.currentState = 'loading'   
            if(errors.length == 0){
                this.user.isSignedIn = true
                this.user.id = account.id
                this.user.username = account.username
                this.user.password = account.password
                this.currentState = 'succeededToPostAccount'
            }else{
                this.errors = errors
                this.currentState = 'failedToPostAccount'
            }
            })

        }
    } 
}
</script>
    
    
    <template>
   <h1>Sign in </h1>
   <div class="divider"/>
   <div v-if="this.user.isSignedIn == false">
   <form @submit.prevent="accountSignIn()">
    <input v-model="account.username" type="text" placeholder="Username">
    <input v-model="account.password" type="password" placeholder="Password">
    <input type="submit" value="Sign In">
   </form>
    </div>

   <div class="divider"/>
   <div v-if="currentState == 'loading'"> Loading... </div>
   <div v-else-if="currentState == 'succeededToPostAccount'"> Signed In </div>
   <div v-else-if="currentState == 'failedToPostAccount'">{{errors}}Failed to Sign In </div>
    </template>    
   <style scoped>
    input{
        background: #F3F3B7;
        border: 1px solid black;
        border-radius: 50px;
        padding: 2%;
        margin: 2%;
        font-size: 1em;
        color: black;
    }
    input:focus{
        outline: 1px black solid;
    }
    </style>