<template>
	<div class="alert-main" v-if="show">
		<div class="alert-main-div border-box">
			<div>
				{{alertText}}
			</div>
			<div class="alert-button-group">
				<div class="alert-single-button" v-if="alertType == 'single'">
					<button class="btn width100" @click="cancelEvent">确定</button>
				</div>
				<div class="alert-double-button" v-if="alertType == 'double'">
					<button class="btn width40 lefted" @click="confirmEvent">确定</button>
					<button class="btn width40 righted" @click="cancelEvent">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.border-box{
	box-sizing: border-box;
}
.alert-main{
	position: fixed;
	width:100%;
	height: 100%;
	top:0;
	left:0;
	background-color: rgba(0,0,0,0.4);
	z-index: 2;
}
.alert-main-div{
	position: absolute;
	width:200px;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	background-color: blue;
	border-radius: 8px;
	padding:20px 30px;
	z-index: 3;
}
.width100{
	width:100%;
}
.width40{
	width:40%;
}
.lefted{
	float: left;
}
.righted{
	float: right;
}
.btn{
	line-height: 34px;
	font-size: 18px;
	outline: none;
	border:none;
	background-color: red;
	color:#fff;
	text-align: center;
	cursor: pointer;
	padding:0;
	opacity: 0.85;
	border-radius: 10px;
}
.btn:hover{
	opacity: 1;
}
.alert-button-group{
	margin-top: 10px;
}
</style>
<script>
import {changeAlert} from "../action/uiAction";

export default{
	vuex:{
		getters:{
			show:({ui}) => ui.alert,
			alertText:({ui}) => ui.alertText,
			alertType:({ui}) => ui.alertType,
			alertDealEvent:({ui}) => ui.alertDealEvent,
		},
		actions:{
			changeAlert
		}
	},
	data(){
		return {

		}
	},
	methods:{
		cancelEvent(){
			this.changeAlert(false);
		},
		confirmEvent(){
			this.alertDealEvent();
			this.changeAlert(false);
		}
	}
}
</script>