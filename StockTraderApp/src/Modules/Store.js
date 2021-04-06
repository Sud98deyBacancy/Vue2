import Vue from 'vue';
import Vuex from 'vuex';
import Stocks from './Stocks';
import PortFolio from './PortFolio';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{ Stocks,PortFolio}
});