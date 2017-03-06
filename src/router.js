import vue from 'vue';
import vueRouter from 'vue-router';
import app from "./components/app.vue";

vue.use(vueRouter);

let router = new vueRouter({
	hashbang:true,
	history:false,
});

router.map({
	'*':{
		component : require('./components/index.vue')
	},
	'/':{
		name:'index',
		component : require('./components/index.vue'),
		headTitle:'vue demo 首页',
	},
	'/about':{
		name:'about',
		component : require('./components/about.vue'),
		headTitle:'vue demo about页',
	},
	'/home':{
		name:'home',
		component : require('./components/home.vue'),
		headTitle:'vue demo home页',
	},
	'/page':{
		name:'page',
		component : require('./components/page.vue'),
		headTitle:'page 页面'
	}
});
router.beforeEach(function(transition){
	if (transition.to.name == 'page'){
		if (isNaN(transition.to.query.num) || transition.to.query.num <= 0){
			router.go('/home');
		}
	}
	transition.next();
});
router.afterEach(function (transition) {
	console.log('成功浏览到: ' + transition.to.path);
	document.title = transition.to.headTitle;
});

router.start(vue.extend(app),'#app');
