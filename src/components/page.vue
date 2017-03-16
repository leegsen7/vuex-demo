<template>
	<div>{{lang.page_page}}<span @click="alert">{{pageNum}}</span></div>
</template>

<script>
import {changeAlert} from "../action/uiAction";

export default{
	vuex:{
		getters:{
			lang:({lang}) => lang.lang
		},
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
			this.$set('pageNum',num);
		}	
	},
	methods:{
		alert(){
			this.changeAlert(true,this.pageNum);
		}
	}
}
</script>