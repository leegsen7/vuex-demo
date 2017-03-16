<template>
<div>
	<div>{{lang.home_page_title}}</div><br>
	<input type="text" v-model="pageNum" />
	<button @click="checkNum">{{lang.home_to_page}}</button>
</div>
</template>
<style scoped>
.alert-text{
	color:#fff;
}
</style>
<script>
import store from "../store/store";
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
	methods:{
		checkNum(){
			if (isNaN(this.pageNum) || this.pageNum <= 0){
				this.changeAlert(true,{zh:"请填写准确数字",en:'Please write true number'});
			}
			else {
				this.changeAlert(true,{zh:"将去到page页面?",en:'Will go to Page page?'},"double",this.toPage);
			}
		},
		toPage(){
			this.$router.go({path:"/page",query:{num:this.pageNum}});
		}
	},
	store
}
</script>