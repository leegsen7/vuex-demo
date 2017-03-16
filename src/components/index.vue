<template>
	<div>{{lang.index_page}}</div>
</template>

<script>
export default {
	vuex:{
		getters:{
			lang:({lang}) => lang.lang
		}
	}
}
</script>