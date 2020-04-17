// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import VueApollo from 'vue-apollo';
import apolloProvider from '../vueApollo';
import { grid, gridItem, tab, tabs, Cell, CellGroup,Icon } from "vant";
import '../static/js/media_750'
require('./mock/Family')
require('./mock/Help')
require('./mock/Measures')
require('./mock/Removal')
require('./mock/UserInfo')
require('./mock/Address')
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueApollo);
Vue.use(grid)
  .use(gridItem)
  .use(tab)
  .use(tabs)
  .use(Cell)
  .use(Icon)
  .use(CellGroup);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  provide: apolloProvider,
  router,
  store,
  components: { App },
  template: "<App/>"
});
