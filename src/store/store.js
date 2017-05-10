import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
Vue.use(Vuex);


const state = {
  name: '活动详情',
  num: '50',
  itemNum: 1,
  foods: [                                                                                                                                                                                                                                                                                                                                                
    {
        id: 1,
        name: '鱼香肉丝2',
        price: 15
    }, {
        id: 2,
        name: '宫保鸡丁',
        price: 14
    }, {
        id: 3,
        name: '土豆丝',
        price: 10
    }, {
        id: 4,
        name: '米饭',
        price: 2
    }],
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});