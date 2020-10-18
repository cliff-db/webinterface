import Home from './pages/Home.svelte';
import Login from './pages/Login.svelte';
import Dashboard from './pages/Dashboard.svelte';
import Plugins from './pages/Plugins.svelte';
import QueryEditor from './pages/QueryEditor.svelte';
import Profile from './pages/Profile.svelte';
import Database from './pages/database/Database.svelte';
import ServerSettings from './pages/ServerSettings.svelte';

const routes = {
    '/': Home,
    '/login': Login,
    '/dashboard': Dashboard,
    '/editor': QueryEditor,
    '/profile': Profile,
    '/plugins': Plugins,
    '/database/:databaseName': Database,
    '/server-settings': ServerSettings,
}

export default routes;