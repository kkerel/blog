import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import Home from '@/components/menu/home'
import Profile from '@/components/menu/Profile'
import Referencedata from '@/components/menu/Referencedata'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect : {
				name : 'Home'
			}
		},
		{
			path: '/',
			name: 'main',
			component: main,
			children:[
				{
					path: 'home',
					name: 'Home',
					component: Home
				},
				{
					path: 'Profile',
					name: 'Profile',
					component: Profile
				},
				{
					path: 'referencedata',
					name: 'Referencedata',
					component: Referencedata
				}
			]
		}
	]
})
