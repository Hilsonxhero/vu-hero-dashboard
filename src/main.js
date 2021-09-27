import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import vuetify from './plugins/vuetify'
import VueApexCharts from './plugins/vue-apexcharts'
import Ckeditor from 'ckeditor4-vue'
import './assets/css/app.css'
import './assets/css/variables.scss'

import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false
Vue.use(Ckeditor)
Vue.use(VueSweetalert2)
Vue.use(VueMeta)
new Vue({
    router,
    store,
    vuetify,
    VueApexCharts,
    render: h => h(App)
}).$mount('#app')
