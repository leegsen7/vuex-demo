<template>
<div>
	<div @mouseover="overEvent($event)" @mouseout="outEvent">
		<slot></slot>
	</div>
	<div v-if="isMouse">
		{{className}}
	</div>
</div>
</template>

<script>
export default {
	data(){
		return {
			className:'',
			isMouse:false,
		}
	},
	methods:{
		overEvent($event){
			this.isMouse = true;
			let src = $event.target || $event.srcElement;
			this.className = src.className;
		},
		outEvent(){
			this.isMouse = false;
		}
	}
}
</script>