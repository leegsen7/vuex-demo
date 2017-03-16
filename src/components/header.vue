<template>
<div>
	<h1>
		<span class="link-span" v-link="{path:'/'}" title="首页">Hello App!</span>{{myNum}}
		<span style="margin-left:200px;">
			<span v-if="langId == 1" @click="toChangeLang(0)">中文</span>
			<span v-else @click="toChangeLang(1)">English</span>
		</span>
	</h1>
	
	<p>  
		<a v-link="{ path: '/home' }">{{lang.home_page}}</a>  
		<a v-link="{ path: '/about' }">{{lang.about_page}}</a>

	</p> 
</div>
</template>

<script>
import {changeLang} from "../action/langAction";

export default{
	vuex:{
		getters:{
			langId: ({lang}) => lang.langId,
			lang: ({lang}) =>lang.lang,
			myNum:state => state.count,
		},
		actions:{
			changeLang
		}
	},
	methods:{
		toChangeLang(index){
			this.changeLang(index);
		}
	}
}
</script>

<style scoped>
h1 span{
	cursor: pointer;
}
</style>