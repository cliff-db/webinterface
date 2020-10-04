
<script lang="ts">
    import * as prism from 'prismjs';
    import { onMount } from 'svelte';

    function highlight(element: HTMLElement) {
        var content = element.innerText;
        element.classList.add("language-sql");
        prism.highlightElement(element, false, (e) => {
            console.log("Highlight done.")
        })
    }

    
	onMount(() => {
        let editor: HTMLElement = document.getElementsByClassName("query-editor")[0] as HTMLElement;
		highlight(editor);
	});
</script>

<main>
    <pre>
        <code class="query-editor language-sql" contenteditable on:change={(event) => {highlight(event.currentTarget)}}>
            <!-- Editor Content -->
        </code>
    </pre>
</main>

<style type="text/scss">
    .query-editor {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
