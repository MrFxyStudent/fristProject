import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
console.log(1111);

// createApp.prototype.$bus = new createApp()

createApp(App).use(store).use(router).mount('#app')