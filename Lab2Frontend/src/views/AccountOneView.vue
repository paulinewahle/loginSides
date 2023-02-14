<script>
import { getAccountById } from '../activity-finder-client.js'


export default{
  components: {
   
  },
  data(){
    return {
      account:{
        id: 0,
        username: "",
        password: "",
      }
    }
  },
  mounted(){
    getAccountById(this.$route.params.id, (errorMessages, account)=>
    {
      this.account = account
    })
  },
  
}
  


</script>
    
    
  <template>
   <h1>Account Details</h1>
   
    <ul>
      <li>
        User:    #{{account.id}}
      </li>
      <li>
        Username:    {{account.username}}
      </li>
      <li>
        Password:    {{account.password}}
      </li>
    </ul>
    <RouterLink to="/accountall" class="nav_bigbutton"> Back to all Accounts </RouterLink>
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
    li:hover{
      color:#E7E76F;
      background: black;
    }
    #view-text{
      color:#E7E76F;
    }
    
    </style>