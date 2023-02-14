<script>
import AccountAllView from "../views/AccountAllView.vue";

  export default {
    components: { 
      AccountAllView, 
    },
  data(){
    return {
     
    }
  }

    
}
</script>

<template>

      <RouterLink to="/accountall" class="nav_smallbutton">User Profiles</RouterLink>
</template>    
<style scoped>
 .nav_smallbutton{
  border: none;
  text-align: start;
 }
</style>