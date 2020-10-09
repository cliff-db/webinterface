<script lang="ts">
    import Icon from "svelte-awesome";
    import { faPlay, faCheck } from "@fortawesome/free-solid-svg-icons";

    import { onMount } from "svelte";

    import { Parser } from "node-sql-parser";

    let query: string = "-- Example";
    let parser = new Parser();

    function highlight(element: HTMLElement) {
        let ast = parser.astify(query);
        // TODO
    }

    onMount(() => {
        let editor: HTMLElement = document.getElementsByClassName(
            "query-editor"
        )[0] as HTMLElement;
        highlight(editor);
    });
</script>

<style type="text/scss">
    $toolbar-background-color: #ecf0f1;

    .toolbar {
        text-align: left;
        background-color: $toolbar-background-color;
    }

    .select-database {
        padding: 0;
        margin: auto;
    }

    $button-background-color: #ccc;
    $button-background-color-hover: darken($button-background-color, 12%);

    button {
        padding: 2px;
        width: 24px;
        height: 24px;
        margin: auto;
        cursor: pointer;
        transition: all 130ms;
        background-color: $button-background-color;

        &:hover {
            background-color: $button-background-color-hover;
        }
    }

    .button-exec {
        color: green;
    }

    .query-editor {
        display: block;
        text-align: left;
        width: 100%;
        height: 100%;
    }
</style>

<div class="toolbar">
    <select class="select-database">
        <option>foo_db</option>
        <option>bar_db</option>
    </select>
    <button class="button-exec" alt="Execute">
        <Icon data={faPlay} />
    </button>
    <button class="button-parse" alt="Parse">
        <Icon data={faCheck} />
    </button>
</div>
<code
    class="query-editor language-sql"
    contenteditable
    bind:textContent={query}
    on:change={(event) => {
        highlight(event.currentTarget);
    }}>
    <!-- Editor Content -->
</code>
