<script lang="ts">
	import { onMount } from 'svelte';

    export let theme: string;

    onMount(() => {
        let className = `theme-${theme}`;
        if(theme == 'light') {
            document.body.classList.forEach(name => {
                if(name.startsWith("theme-") && name !== className) {
                    document.body.classList.remove(className); // remove other theme-classes if nessecary
                }
            });
        } else {
            if(!document.body.classList.contains(className)) {
                document.body.classList.add(className);
            }
        }
    });
</script>

<style>
    :global(body) {
        --theme-foreground: #333333;
        --theme-secondary-foreground: #000000;
        --theme-background: #ffffff;
        --theme-sidebar-background: #ecf0f1;
        --theme-sidebar-background-hover: #e0e7e8;
        --theme-selection-grid-background: #b2f1f5;
        --theme-selection-grid-background-hover: #dff9fb;
    }

    :global(body.theme-dark) {
        --theme-foreground: #ffffff;
        --theme-secondary-foreground: #d8d8d8;
        --theme-background: #34495e;
        --theme-sidebar-background: #2c3e50;
        --theme-sidebar-background-hover: #2c3c4d;
        --theme-selection-grid-background: #576574;
        --theme-selection-grid-background-hover: #8395a7;
    }
</style>
