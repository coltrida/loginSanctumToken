import { createStore } from 'vuex'

import LoginModule from './module/login';

const store = createStore({
    modules: {
        login: LoginModule
    }
});

export default store;
