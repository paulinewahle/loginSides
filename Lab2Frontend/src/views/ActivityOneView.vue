<script>
import { getActivityById } from '../activity-finder-client.js'
import { deleteActivityById } from '../activity-finder-client.js'

export default{
  props:{
    user: Object
  },
  components: {
   
  },
  data(){
    return {
      activity: {
          accountId: 0,// The id of the account creating the activity (i.e. the signed in user's account id).
          title: "",
          description: "",
          startTime: 1664449118000, // Unix timestamp (milliseconds)
          endTime: 1664449119000, // Unix timestamp (millisecond)
          latitude: 57.7825634,
          longitude: 14.165719,
        },
      errors: [],
      deleteErrors: []
    }
  },
  methods: {
    activityDelete(){
      deleteActivityById(this.activity.id, (errors) => {
        if(errors.length == 0){
          // The activity was successfully deleted.
          //this.activityToDelete = activities
          console.log("deleted")
          this.$redirect("/") //send to home
        }else{
          this.deleteErrors = errors
          console.log(this.activity)
          console.log("error " + this.deleteErrors)
        }
      })
    },
    
    
  },
  mounted(){
    getActivityById(this.$route.params.id, (errors, activity) =>{
      if(errors.length == 0){
        this.activity = activity
      }
      else{
        this.errors = errors
      }
    })
  },
}
  


</script>
    
    
  <template>
   <h1>Activity Details</h1>
   
    <ul>
      <li>
        Activity ID:   #{{activity.id}} 
      </li>
      <li>
        Posted By:   #{{activity.accountId}}
      </li>
      <li>
        Title:    {{this.activity.title}}
      </li>
      <li class="description">
        Description:    {{this.activity.description}}
      </li>
      <li>
        Time:    {{this.activity.startTime}} -  {{this.activity.endTime}}
      </li>
      <li>
        Location:    {{this.activity.latitude}} / {{this.activity.longitude}}
      </li>
      
    </ul>
    <div v-if="this.user.id == activity.accountId" id="two-buttons"> 
      <input type="submit" value="Delete" class="nav_smallbutton" @click="activityDelete">
      <div v-if="this.activity.startTime > Date.now()" class="nav_smallbutton">
        <RouterLink :to="`/activityupdate/${activity.id}`"> Update </RouterLink>  
      </div>
      <div v-else>
        <p> Activity has already started and can not be updated </p>
      </div>
    </div>
    <RouterLink to="/" class="nav_bigbutton"> Back to Feed </RouterLink>
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
      padding: 0;
      width: 99%;
      height: 100%;
      overflow: scroll;
    }
    li{
      list-style: none;
      margin: 0;
      border-bottom: 1px solid black;
      height: 1em;
      padding: 2%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .description{
      height: 8em;
      text-align: left;
    }
    li:hover{
      color:#E7E76F;
      background: black;
    }
    #view-text{
      color:#E7E76F;
    }
    #two-buttons{
      display: flex;
    }
    
    </style>