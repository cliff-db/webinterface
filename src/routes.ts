import Home from './pages/Home.svelte';
import Login from './pages/Login.svelte';
import Dashboard from './pages/Dashboard.svelte';
import QueryEditor from './pages/QueryEditor.svelte';
import Profile from './pages/Profile.svelte';

const routes = {
    '/': Home,
    '/login': Login,
    '/dashboard': Dashboard,
    '/editor': QueryEditor,
    '/profile': Profile,
}

export default routes;