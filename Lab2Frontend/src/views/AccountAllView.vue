<script>
import { getAllAccounts } from '../activity-finder-client.js';
import AccountCreateView from './AccountCreateView.vue';
import AccountOneView from './AccountOneView.vue';

export default {
	components: {
    AccountCreateView,
    AccountOneView
},
  data(){
    return{
      currentState: 'loading',
      loadedAccounts: [],
      errorMessages: [],
    }
  },
  mounted(){
    getAllAccounts((errors, accounts)=>{ //WHERE IS THIS THING CALLED?? - mounted: when it's added to to
      if(0< errors.length){
        this.currentState = 'failedToLoad',
        this.errorMessages = errors 
      }
      else{
        this.loadedAccounts = accounts,
        this.currentState = 'succeededToLoad'
      }
    })
  }
}

</script>
    
    
  <template>
   <h1>Accounts</h1>
   <div class="divider"/>

   <div v-if="currentState == 'loading'" class="accounts"> Loading... </div>

   <div v-else-if="currentState == 'succeededToLoad'" class="accounts"> 
    <ul>
      <li v-for="accounts in loadedAccounts">
        <RouterLink :to="`/accountone/${accounts.id}`"> 
       
        #{{accounts.id}} - {{accounts.username}} <div id="view-text"> View</div> 
        </RouterLink>
      </li>
      
    </ul>
  </div>

   <div v-else-if="currentState == 'failedToLoad'" class="accounts">
    Unable to load: 
    <ul><li v-for="errors in errorMessages">{{errors}}</li></ul>
   </div>
  
   
   
  </template>    

   <style scoped>
    .accounts{
      width: 100%;
      border: 1px black solid;
      text-align: start;
      overflow-y: scroll;
      overflow-x: hidden;
    }
    ul{
      padding: 0 0;
      width: 99%;
    }
    li{
      list-style: none;
      margin: 0;
      border-bottom: 1px solid black;
     
     
      
    }
    a{
      width: 96%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 2%;
      height: 1em;
    }
    a:hover{
      color:#E7E76F;
      background: black;
    }
    #view-text{
      color:#E7E76F;
    }
    
    </style>