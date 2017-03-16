<template>
<div>
	<div>{{lang.about_page_title}}</div>
	<div>{{lang.about_calc}}</div>
	<click></click>
</div>
</template>
<script>
export default{
	vuex:{
		getters:{
			lang:lang => lang.lang.lang
		}
	},
	components:{
		'click':require('./click.vue')
	}
}
</script>