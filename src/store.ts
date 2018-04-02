import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface StoreState {
  count: number;
}

export default new Vuex.Store<StoreState>({
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => {
      state.count++;
      console.log('increment');
    },
    decrement: (state) => {
      state.count--;
      console.log('decrement');
    },
  },
  actions: {
  },
});
