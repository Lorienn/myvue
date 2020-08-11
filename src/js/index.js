import Vue from 'vue'
import router from './router'
import store from './store'
import App from './index.vue'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
