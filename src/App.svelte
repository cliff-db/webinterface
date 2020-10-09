<script>
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import {theme} from './storage';
    import Theme from './Theme.svelte';

    import Sidebar from './components/Sidebar.svelte';
</script>

<Theme theme="{$theme}"/>
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

    :global(body) {
        background-color: var(--theme-background);
    }

	main {
		width: 100%;
        color: var(--theme-foreground);
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
        background-color: var(--theme-sidebar-background);
        margin-left: 0;
        margin-top: 0;
    }
</style>