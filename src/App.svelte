<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';

    import Sidebar from './components/Sidebar.svelte';
</script>

<div id="app">
	<div class="sidebar">
		<Sidebar/>
	</div>
	<main class="router-view">
		<Router {routes}/>
	</main>
</div>

<style lang="scss">
	$sidebar-width: 20%;
    $main-width: 100% - $sidebar-width;

	#app {
		width: 100%;
	}

	.router-view {
        position: fixed;
        text-align: center;
        margin: 0 auto;
		width: $main-width;
		top: 0;
        left: $sidebar-width;
    }

    .sidebar {
        position: fixed;
        height: 100%;
        width: $sidebar-width;
        left: 0;
        top: 0;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #ecf0f1;
        margin-left: 0;
        margin-top: 0;
    }
</style>