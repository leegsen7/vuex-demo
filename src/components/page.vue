<template>
	<div>page页面的参数：<span @click="alert">{{pageNum}}</span></div>
</template>

<script>
import {changeAlert} from "../action/uiAction";

export default{
	vuex:{
		actions:{
			changeAlert
		}
	},
	data(){
		return {
			pageNum:'',
		}
	},
	route:{
		data({ to: { query: { num }}}){
			let self = this;
			
			self.$set('pageNum',num);
		}	
	},
	methods:{
		alert(){
			this.changeAlert(true,this.pageNum);
		}
	}
}
</script>