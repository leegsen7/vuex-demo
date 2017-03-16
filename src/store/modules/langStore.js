import language from "../../language";

const state = {
	langId:0,  // 0 代表中文
	lang:language.zh
}

const mutations = {
	CHANGE_LANG(state,index){
		if (index == state.langId) return false;
		state.langId = index;
		index == 0 ? state.lang = language.zh : state.lang = language.en;
	}
}

export default {
	state,
	mutations
}