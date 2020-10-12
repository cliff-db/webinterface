<script lang="ts">
    import { _ } from 'svelte-i18n';

    export let name: string;
    export let iconSource: string;
    export let description: string;
    export let version: string;
    export let install: boolean;
</script>

<style lang="scss">
    .plugin {
        display: grid;
        grid-template-columns: 75px 1fr 1fr;
        border-radius: 5px;
        background-color: var(--theme-selection-grid-background);
    }

    .action-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-weight: 900;
        cursor: pointer;
        transition: all 200ms;

        padding: 12px;
        
        &[data-action=install] {
            background-color: #2ecc71;

            &:hover {
                background-color: #27ae60;
            }
        }

        &[data-action=uninstall] {
            background-color: #e74c3c;

            &:hover {
                background-color: #c0392b;
            }
        }
    }

    .name {
        font-weight: 600;
    }

    .version {
        font-weight: 100;
        font-size: 10pt;
        color: #bdc3c7;

        &::before {
            content: "Version ";
        }
    }

    .description {
        margin-top: 4px;
        font-weight: 100;
    }

    .text-container {
        text-align: left;
        padding: 12px;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        background-color: white;
    }

    img {
        width: 100%;
    }
</style>

<div class="plugin">
    <div class="icon-container">
        <img src="{iconSource}" alt="{name}"/>
    </div>
    <div class="text-container">
        <div>
            <span class="name">{name}</span>
            <span class="version">{version}</span>
        </div>
        <span class="description">{description}</span>
    </div>
    <div class="action-button" data-action="{install ? "install" : "uninstall"}">{install ? $_("plugins.action.install") : $_("plugins.action.uninstall")}</div>
</div>
