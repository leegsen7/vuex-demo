<template>
<div class="click-main">
	<button @click="addAction">+</button>
	<button @click="subAction">-</button>
</div>
</template>

<script>
import {addAction,subAction} from "../action/clickAction";

export default{
	vuex:{
		actions:{
			addAction,
			subAction
		}
	},
}
</script>