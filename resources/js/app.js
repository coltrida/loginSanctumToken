require('./bootstrap');

import { createApp } from 'vue'
import Welcome from './Welcome';

import router from './Router/index'
import store from './Store/index'

const app = createApp({});
app.use(router);
app.use(store);

app.component('welcome', Welcome);

app.mount('#app');
