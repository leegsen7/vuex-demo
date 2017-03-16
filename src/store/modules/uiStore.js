const state = {
	alert:false,
	alertText:'',
	alertType:'single',
	alertDealEvent:null
}

const mutations = {
	CHANGE_ALERT(state,flag,text,type,event){
		state.alert = flag;
		state.alertText = text;
		state.alertType = type || 'single';
		state.alertDealEvent = event || null;
	}
}

export default {
	state,
	mutations
}