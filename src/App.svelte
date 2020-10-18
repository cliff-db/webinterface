<script>
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import {theme} from './storage';
    import Theme from './Theme.svelte';
    import {initializeLanguages} from './i18n';
    initializeLanguages();

    import Header from './components/Header.svelte';
    import Sidebar from './components/Sidebar.svelte';
</script>

<Theme theme="{$theme}"/>
<main>
    <header>
        <Header/>
    </header>
	<aside>
		<Sidebar/>
	</aside>
	<article>
		<Router {routes}/>
	</article>
</main>

<style lang="scss">
    $header-height: 36px;

    $sidebar-height: calc(100% - #{$header-height});
	$sidebar-width: 20%;
    $main-width: 100% - $sidebar-width;

    header {
        left: 0;
        top: 0;
        position: absolute;
        height: $header-height;
        width: 100%;
    }

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
		top: $header-height;
        left: $sidebar-width;
        height: calc(100vh - #{$header-height});
        overflow: auto;
    }

    aside {
        position: fixed;
        height: $sidebar-height;
        width: $sidebar-width;
        left: 0;
        top: $header-height;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: var(--theme-sidebar-background);
        margin-left: 0;
        margin-top: 0;
    }
</style>