<template>
<div>
	<mouse-show>
		<h1><span class="link-span" v-link="{path:'/'}">Hello App!</span>{{myNum}}</h1>
	</mouse-show>
	
	<p>  
		<a v-link="{ path: '/home' }">home界面 </a>  
		<a v-link="{ path: '/about' }">about界面</a>  
	</p> 
</div>
</template>

<script>

export default{
	vuex:{
		getters:{
			myNum:state => state.count,
		}
	},
	components:{
		"mouseShow":require('./mouseShow.vue')
	}
}
</script>

<style scoped>
h1 span{
	cursor: pointer;
}
</style>