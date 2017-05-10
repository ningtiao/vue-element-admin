const GET_DATA = 'GET_DATA';

export default {
	[GET_DATA](state, foods, payload) {
		state.foods = payload.foods;
	},
}