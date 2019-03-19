import Vue from 'vue';
import Router from 'vue-router';
import Root from './Root.vue';
import Login from './Login.vue';



Vue.use(Router);

export default new Router({
	mode:'history',
	base:process.env.BASE_URL,
	linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root,
    },
		  {
		  path: '/login',
		  name: 'login',
		  component: Login,
		}
// 		,
// 		 {
// 		  path: '/home',
// 		  name: 'home',
// 		  component: Home,
// 			children:[
// 				{
// 					path: 'list',//属于home组件
// 					name: 'list',
// 					 component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
// 				},
// 					{
// 					path: 'user',
// 					name: 'user',
// 					 component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
// 				}
// 			]
// 		},
// 		 {
// 		  path: '/add',//单独的组件
// 		  name: 'add',
// 			component: () => import(/* webpackChunkName: "add" */ './views/Add.vue')
// 		},
// 	
  ],
});
