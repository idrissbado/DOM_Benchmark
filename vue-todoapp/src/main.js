import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/main.css'

// Performance monitoring
console.time('App Initialization');
console.log('Starting Vue application...');

const app = createApp(App);

// Register global components if needed
// app.component('BaseButton', BaseButton);

// Use plugins
app.use(router);
app.use(store);

// Mount the app
app.mount('#app');

console.timeEnd('App Initialization');
console.log('Vue application initialized');