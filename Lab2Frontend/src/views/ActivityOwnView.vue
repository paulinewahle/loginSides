<script>
import { getActivitiesByAccountId } from '../activity-finder-client.js'

export default{
  props:{
    user: Object
  },
  components: {
   
  },
  data(){
    return {
      errors: [],
      deleteErrors: [], 
      loadedActivities: [],
      activityToDelete: [],
    }
  },
  
  mounted(){
    getActivitiesByAccountId(this.user.id, (errors, activity) => {
    if(errors.length == 0){
    this.loadedActivities = activity
    console.log(this.loadedActivities)
    //console.log("aliright" + JSON.stringify (this.user))
    }else{
    this.errors = errors
    }
})
  },
}
  


</script>
    
    
  <template>
  <div class="wrapper">
   <h1>My Posts</h1> 
   <div v-if="this.user.isSignedIn == true"> 
    signed in as {{this.user.id}}
    <ul>
      <!---->
      
      <li v-for="activity in loadedActivities">
        Title:   {{activity.title}}  <RouterLink :to="`/activityone/${activity.id}`" class="nav_smallbutton"> Edit</RouterLink>
      </li>
   
    </ul>
   
   </div>
   <div v-else>
    no activities yet
   </div>
  
    <RouterLink to="/" class="nav_bigbutton"> Back to Feed </RouterLink>
  </div>  
  </template>    

   <style scoped>
    .wrapper{
      width: 100%;
    }
    .accounts{
      width: 100%;
      border: 1px black solid;
      text-align: start;
      overflow-y: scroll;
      overflow-x: hidden;
    }
    ul{
      padding: 0;
      width: 99%;
      height: 20vh;
      
    }
    li{
      list-style: none;
      margin: 0;
      border-bottom: 1px solid black;
      height: 2em;
      padding: 2%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .description{
      height: 8em;
      text-align: left;
    }
    
    
    .nav_smallbutton{
      margin: 0;
      padding: 1%;
      font-size: 1em;
      width: 5em;
    }
    .nav_bigbutton{
      padding: 1em;
    }
    </style>