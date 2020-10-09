<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';

    import Sidebar from './components/Sidebar.svelte';
</script>

<main>
	<aside>
		<Sidebar/>
	</aside>
	<article>
		<Router {routes}/>
	</article>
</main>

<style lang="scss">
	$sidebar-width: 20%;
    $main-width: 100% - $sidebar-width;

	main {
		width: 100%;
	}

	article {
        position: fixed;
        text-align: center;
        margin: 0 auto;
		width: $main-width;
		top: 0;
        left: $sidebar-width;
    }

    aside {
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