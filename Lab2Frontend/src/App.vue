<script>
import ActivityAllView from './views/AccountAllView.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
	components: {
	ActivityAllView,
	Header,
	Footer
},
  data(){
    return {
      user: {
        isSignedIn: false,
		id: 0,
		username: '',
		password: '',
      }
    }
  }
}

</script>

<template>
	<body>
	<div id="content-wrapper">
		<header>
		<Header :user="user"/>
		</header>
		
		<main>
			<div class="divider"/>
			<RouterView :user="user"></RouterView>
			<div class="divider"/>
		</main>
		<footer>
		<Footer/>
		</footer>
	</div>
	</body>
</template>

<style scoped>

#content-wrapper{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	border: 1px black solid;
	padding: 10%;
	width: 90vh;
	height: 75vh;
	border-radius: 80px;
	background: #E7E76F;
	box-shadow: 1px 1px 20px rgba(128, 128, 128, 0.622);
	
}
main{
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}




</style>
