<script>
import { createAccount } from '../activity-finder-client.js';

export default{
    
    
    data(){
        return{
            account:{
                username: "",
                password: "",
            },
            currentState: '',
            errors: [],
        }
    },


    methods: {
        
        saveAccount(){
            this.currentState = 'loading'
            createAccount(this.account, (errors, id) => {
                if (errors.length == 0){
                    this.currentState = 'succeededToPostAccount'
                }
                else{
                    this.currentState = 'failedToPostAccount'
                    this.errors = errors
                }
                
            })
        }
    } 
}
</script>
    
    
    <template>
   <h1>Create Account</h1>
   <div class="divider"/>

   <form @submit.prevent="saveAccount()">
    <input v-model="account.username" type="text" placeholder="Username">
    <input v-model="account.password" type="password" placeholder="Password">
    <input type="submit" value="create">
   </form>

   <div class="divider"/>
   <div v-if="currentState == 'loading'"> {{errors}} Loading... </div>
   <div v-else-if="currentState == 'succeededToPostAccount'"> Created Account </div>
   <div v-else-if="currentState == 'failedToPostAccount'">{{errors}} Failed to Create this Account </div>
    </template>    
   <style scoped>
    
    </style>