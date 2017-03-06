<template>
<div>
	<m-header></m-header>
	<router-view></router-view>
	<m-alert></m-alert>
</div>
</template>

<script>
import store from "../store/store"

export default{
	components:{
		'mHeader':require('./header.vue'),
		"mAlert":require('./alert.vue'),
	},
	store,
}
</script>