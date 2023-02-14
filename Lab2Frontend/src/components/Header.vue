<script>
import AccountCreateView from "../views/AccountCreateView.vue";
import { signOut } from '../activity-finder-client.js'

  export default {
    props: {
      user: Object,
    },
    components: { 
      AccountCreateView,
    },
    methods: {
      accountSignOut(){
        signOut(() => {
        this.user.isSignedIn = false      
      })
      }
      
    }
    
}
</script>

<template>
  <header>
    <RouterLink to="/" class="nav_smallbutton">Activities</RouterLink>
    <nav>
      <div v-if="this.user.isSignedIn == true">
      <input type="submit" value="Sign Out" class="nav_smallbutton" @click="accountSignOut">
      </div>
      <div v-else> 
      <RouterLink to="/accountcreate" class="nav_smallbutton">Sign Up</RouterLink>
      <RouterLink to="/accountsignin" class="nav_smallbutton">Sign In</RouterLink>
      </div>
    </nav>
  </header>
</template>    
<style scoped>
  header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 5vh;

  }
   h1{
    font-weight: 900;
    font-size: 3em;
    width: 40%;

  
   }
   nav{
    width: 60%;
    text-align: end;
   }
</style>