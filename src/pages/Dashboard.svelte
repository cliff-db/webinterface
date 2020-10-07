
<script>
    import Sidebar from '../components/Sidebar.svelte';
</script>

<div class="sidebar">
    <Sidebar/>
</div>
<main>
    <h1>Dashboard</h1>
</main>

<style type="text/scss">
    $sidebar-width: 20%;
    $main-width: 100% - $sidebar-width;

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
        width: $main-width;
        left: $sidebar-width;
        position: absolute;
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

    h1 {
        color: #f19066;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

</style>
