
import { createRouter, createWebHistory } from 'vue-router'
import AccountAllView from './views/AccountAllView.vue'
import AccountCreateView from './views/AccountCreateView.vue'
import AccountOneView from './views/AccountOneView.vue'
import AccountSignInView from './views/AccountSignInView.vue'
import ActivityAllView from './views/ActivityAllView.vue'
import ActivityCreateView from './views/ActivityCreateView.vue'
import ActivityOneView from './views/ActivityOneView.vue'
import ActivityOwnView from './views/ActivityOwnView.vue'
import ActivityUpdateView from './views/ActivityUpdateView.vue'



const router = createRouter({
	history: createWebHistory(),
	routes: [
	{path: '/', component: ActivityAllView},
	{path: '/activitycreate', component: ActivityCreateView},
	{path: '/accountall', component: AccountAllView},
	{path: '/accountcreate', component: AccountCreateView},
	{path: '/accountsignin', component: AccountSignInView},
	{path: '/accountone/:id', component: AccountOneView},
	{path: '/activityone/:id', component: ActivityOneView},
	{path: '/activityown', component: ActivityOwnView},
	{path: '/activityupdate/:id', component: ActivityUpdateView},
	]
})


export default router
