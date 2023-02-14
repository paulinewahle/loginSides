<script>
import { getAllActivities } from '../activity-finder-client.js'

export default{
    props:{
        user: Object
    },
    
    data(){
        return{
            currentState: 'loading',
            errors: [],
            loadedActivities: []
        }
    },


    mounted() {
        
    getAllActivities((errors, activity) => {
    if(errors.length == 0){
    this.currentState = 'succeededToLoadActivities'
    this.loadedActivities = activity
    }
    else{
    this.errors = errors
    this.currentState = 'failedToLoadActivities'
    }
    })
    }
}
</script>
    
    
    <template>
   <h1>Activity Feed </h1>
   <div class="divider"/>
   
   <div v-if="currentState == 'loading'"> Loading... </div>
   <div v-else-if="currentState == 'succeededToLoadActivities'"  class="accounts"> 
    <ul>
      <li v-for="activity in loadedActivities">
        <RouterLink :to="`/activityone/${activity.id}`">  
        ({{activity.accountId}})posted: {{activity.title}} <div id="view-text"> View</div> 
        </RouterLink>
      </li>
      
    </ul>
    </div>
   <div v-else-if="currentState == 'failedToLoadActivities'">{{errors}} Failed to Create this Account </div>
   <div v-if="this.user.isSignedIn == true">
   <RouterLink to="/activitycreate" class="nav_bigbutton"> POST NEW ACTIVITY</RouterLink>
   <RouterLink to="/activityown" class="nav_smallbutton"> My Posts</RouterLink>
   <!--<RouterLink :to="`/activityown/${activities.accountId}`" class="nav_smallbutton">  My Posts </RouterLink>-->
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
      text-align: center;
    }
    a:hover{
      color:#E7E76F;
      background: black;
    }
    #view-text{
      color:#E7E76F;
    }
    .nav_smallbutton{
        width: 94%;
    }
    </style>