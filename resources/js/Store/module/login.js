const state = () => ({
    user: sessionStorage.user ? JSON.parse(sessionStorage.getItem('user')) : null,
    authenticated: !!sessionStorage.user,
    messaggioErrore:null,
    utenti:[]
});

const getters = {
    getUser(state){
        return state.user;
    },

    getUtenti(state){
        return state.utenti;
    },

    getMessaggioErrore(state){
        return state.messaggioErrore;
    },

    getAuthenticated(state){
        return state.authenticated;
    },
};

const actions = {
    async loginUtente({commit}, payload){
        axios.get('/sanctum/csrf-cookie').then(() => {
            axios.post('http://loginsanctumspa.test/api/login', payload).then(response => {
                commit('loginUtente', response.data);
            }).catch(error => {
                commit('loginUtenteErrore', error);
            })
        })
    },

    async fetchUtenti({commit}){
        axios.get('/sanctum/csrf-cookie').then(() => {
            axios.get('http://loginsanctumspa.test/api/utenti').then(response => {
                commit('fetchUtenti', response.data);
            }).catch(error => {
                commit('loginUtenteErrore', error);
            })
        })
    },

    async logoutUtente({commit}){
            axios.get('http://loginsanctumspa.test/api/logout').then(() => {
                commit('logoutUtente');
            }).catch(error => {
                commit('loginUtenteErrore', error);
            })
    },
};

const mutations = {
    loginUtente(state, payload){
        state.user = payload;
        sessionStorage.user = JSON.stringify(payload);
        state.authenticated = true;
    },

    loginUtenteErrore(state, payload){
        state.messaggioErrore = payload;
    },

    logoutUtente(state){
        state.user = null;
        state.authenticated = false;
        sessionStorage.removeItem('user');
    },

    fetchUtenti(state, payload){
        state.utenti = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
