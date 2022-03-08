const routes = [
    {
        path: '/',
        component: () => import('../Pages/Home'),
        name: 'home'
    },
    {
        path: '/login',
        component: () => import('../Pages/Login'),
        name: 'login'
    },
    {
        path: '/register',
        component: () => import('../Pages/Register'),
        name: 'register'
    },
    {
        path: '/utenti',
        component: () => import('../Pages/Utenti'),
        name: 'utenti'
    }
];

export default routes;
