import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import '../semantic/dist/semantic.min.css';
import App from './app.vue';

Vue.use(SuiVue);
new Vue({
  el: '#app',
  render: h => h(App)
});