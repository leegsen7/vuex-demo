import vue from "vue";
import vuex from "vuex";
import ui from "./uiStore";

vue.use(vuex);

const state = {
	count:100
}
const mutations = {
	ADD(state){
		state.count++;
	},
	SUB(state){
		state.count--;
	}
}
export default new vuex.Store({
	state,
	modules:{
		ui
	},
	mutations
})