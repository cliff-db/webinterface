<script lang="typescript">
    import PluginComponent from "../components/PluginComponent.svelte";
    import {PluginTab} from "../model/plugin-tab";
    import {PluginInfo} from "../model/plugin-info";
    import { _ } from 'svelte-i18n';

    let currentTab: PluginTab = PluginTab.InstalledPlugins;

    function getPlugins(tab: PluginTab) {
        switch (tab) {
            case PluginTab.InstalledPlugins:
                return [
                    new PluginInfo(
                        "Installed Plugin 1",
                        "Lorem ipsum dolor sit amet.",
                        "1.0.0",
                        true
                    ),
                ];
            case PluginTab.PluginGallery:
                return [
                    new PluginInfo(
                        "Gallery Plugin 1",
                        "Lorem ipsum dolor sit amet",
                        "1.0.0",
                        false
                    ),
                ];
        }
    }
</script>

<style type="text/scss">
    h1 {
        color: #f19066;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    .flex-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .page-wrapper {
        width: 70%;
    }

    .gallery-selection {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 50%);

        div {
            padding: 24px;
            background-color: var(--theme-sidebar-background);
            transition: all 240ms;
            cursor: pointer;

            &:hover,
            &[aria-selected=true] {
                background-color: var(--theme-sidebar-background-hover);
            }
        }
    }

    .plugin-overview {
        width: 100%;
    }
</style>

<h1>Plugins</h1>
<div class="flex-wrapper">
    <div class="page-wrapper">
        <div class="gallery-selection">
            <div
                aria-selected={currentTab == PluginTab.InstalledPlugins}
                on:click={() => (currentTab = PluginTab.InstalledPlugins)}>
                {$_("plugins.gallery_type.installed")}
            </div>
            <div
                aria-selected={currentTab == PluginTab.PluginGallery}
                on:click={() => (currentTab = PluginTab.PluginGallery)}>
                {$_("plugins.gallery_type.gallery")}
            </div>
        </div>
        <div class="plugin-overview">
            <div class="plugin-container">
                {#each getPlugins(currentTab) as plugin}
                    <PluginComponent
                        name={plugin.name}
                        description={plugin.description}
                        version={plugin.version}
                        iconSource="/img/dummy_plugin_icon_alt.svg"
                        install={!plugin.installed}/>
                {/each}
            </div>
        </div>
    </div>
</div>
