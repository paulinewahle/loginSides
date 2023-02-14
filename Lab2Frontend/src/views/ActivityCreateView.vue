<script>
import { createActivity } from '../activity-finder-client.js'

  export default {
    components: {
  },
  props: {
      user: Object,
    },
    data(){
      return{
        activity: {
          accountId: 0,// The id of the account creating the activity (i.e. the signed in user's account id).
          title: "",
          description: "",
          startTime: 1664449118000, // Unix timestamp (milliseconds)
          endTime: 1664449119000, // Unix timestamp (millisecond)
          latitude: 57.7825634,
          longitude: 14.165719,
        },
        currentState: 'loading',
        errors: [],
        
      }
    },
    methods: {
      saveActivity(){
        this.activity.accountId = this.user.id
        createActivity(this.activity, (errors, id) => {
          if(errors.length == 0){
            this.currentState = 'succeededToLoad'
            this.activity.accountId = this.user.id
            this.activity.title = activity.title
            this.activity.description = activity.description
            this.activity.startTime = activity.startTime
            this.activity.endTime = activity.endTime
            this.activity.latitude = activity.latitude
            this.activity.longitude = activity.longitude
          }
          else{
            this.currentState = 'failedToLoad'
            this.errors = errors
          }
      })
      }
    }
  }
</script>
    
    
  <template>
   
    <h1>Post Activity</h1>
   <div class="divider"></div>

   <form @submit.prevent="saveActivity()">
    <div class="wrapper">
    <label>Title</label><input v-model="activity.title" type="text" placeholder="Title" class="long_input">
    </div>
    <div class="wrapper">
    <label>Time</label><input v-model.number="activity.startTime" type="number" step="any" placeholder="Start Time">
    <p> - </p><input v-model.number="activity.endTime" type="number" step="any" placeholder="End Time">
    <a href="https://timestampgenerator.com/">Timestamp</a>    
  </div>

    <div class="wrapper">
    <label>Location</label><input v-model.number="activity.latitude" type="number" step="any" placeholder="latitude">
    <p> / </p><input v-model.number="activity.longitude" type="number" step="any" placeholder="longitude">
    <a href="https://epsg.io/">Coordinates</a>  
    </div>
    <label>Description</label> <input v-model="activity.description" type="text" rows="1"
      max-rows="6" placeholder="Description" class="long_input"> 
    <input type="submit" value="Post" class="nav_bigbutton">
   </form>


    <div v-if="currentState == 'loading'" class="accounts">  </div>
    <div v-else-if="currentState == 'succeededToLoad'" class="accounts"> Activity Posted</div>
    <div v-else-if="currentState == 'failedToLoad'" class="accounts">
      <p v-for="errors in errors">Unable to load:  {{errors}}</p>
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