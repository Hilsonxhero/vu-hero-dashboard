import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueApexCharts from './plugins/vue-apexcharts'
import Ckeditor from 'ckeditor4-vue'
import './assets/css/app.css'
import './assets/css/variables.scss'

Vue.config.productionTip = false
Vue.use(Ckeditor)
new Vue({
    router,
    store,
    vuetify,
    VueApexCharts,
    render: h => h(App)
}).$mount('#app')
