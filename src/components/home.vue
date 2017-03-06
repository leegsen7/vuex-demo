<template>
<div>
	<div>这是home页面</div><br>
	<input type="text" v-model="pageNum" />
	<button @click="checkNum">去page页面</button>
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
			let self = this;

			if (isNaN(self.pageNum) || self.pageNum <= 0){
				self.changeAlert(true,"请填写准确数字");
			}
			else {
				self.changeAlert(true,"将去到page页面?","double",self.toPage);
			}
		},
		toPage(){
			this.$router.go({path:"/page",query:{num:this.pageNum}});
		}
	},
	store
}
</script>