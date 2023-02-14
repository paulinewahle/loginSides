<script>
import { updateActivityById } from '../activity-finder-client.js'
import { getActivityById } from '../activity-finder-client.js'

  export default {
    components: {
  },
  props: {
      user: Object,
    },
    data(){
      return{
        updateActivity: {
          accountId: 0,
          title: "",
          description: "",
          startTime: 1664449118000, 
          endTime: 1664449119000, 
          latitude: 67,
          longitude: 23,
        },
        currentState: 'loading',
        errors: [],
        
      }
    },
    methods: {
      activityUpdate(activity){
        //this.activity.accountId = this.user.id
        updateActivityById(this.updateActivity.id, this.updateActivity, (errors) => {
         
          if(errors.length == 0){
            this.currentState = 'succeededToUpdate'
          }
          else{
            this.currentState = 'failedToUpdate'
            this.errors = errors
          }
      })
      }
    },
    mounted(){
      console.log(this.$route.params.id)
    getActivityById(this.$route.params.id, (errors, activity) =>{
      if(errors.length == 0){
        this.updateActivity = activity
        console.log("updateActivity" + this.updateActivity)
      }
      else{
        this.errors = errors
        console.log("updateActivity" + this.updateActivity)
      }
    })
  },
  }
</script>
    
    
  <template>
   
    <h1>Post Activity</h1>
   <div class="divider"></div>

   <form @submit.prevent="activityUpdate()">
    <div class="wrapper">
    <label>Title</label><input v-model="updateActivity.title" type="text" class="long_input"> <!--v-model binds inputs to values-->
    </div>
    <div class="wrapper">
    <label>Time</label><input v-model.number="updateActivity.startTime" type="number" step="any" placeholder="Start Time">
    <p> - </p><input v-model.number="updateActivity.endTime" type="number" step="any" placeholder="End Time">
    <a href="https://timestampgenerator.com/">Timestamp</a>    
  </div>

    <div class="wrapper">
    <label>Location</label><input v-model.number="updateActivity.latitude" type="number" step="any" placeholder="latitude">
    <p> / </p><input v-model.number="updateActivity.longitude" type="number" step="any" placeholder="longitude">
    <a href="https://epsg.io/">Coordinates</a>  
    </div>
    <label>Description</label> <input v-model="updateActivity.description" type="text" rows="1"
      max-rows="6" placeholder="Description" class="long_input"> 
    <input type="submit" value="Post" class="nav_bigbutton">
   </form>


    <div v-if="currentState == 'loading'" class="accounts">  </div>
    <div v-else-if="currentState == 'succeededToUpdate'" class="accounts"> Activity Updated</div>
    <div v-else-if="currentState == 'failedToUpdate'" class="accounts">
      <p v-for="errors in errors">Unable to update:  {{errors}}</p>
    </div>
    
  
  </template>    

   <style scoped>
  
  .divider{
    margin: 0% 0;
  }
  form{
   
    display: block;
    text-align: left;
  }
  input{
    width: 23%;
  }
  textarea{
    border-radius: 50px;;
  }
  .long_input{
    width: 75%;
  }
  label{
    display: inline-block;
    width: 90px;

  }
  p{
    display: inline;
  }
  .nav_bigbutton{
    width: 100%;
  }
  
    </style>