<script lang="ts">
    const suffixes: string[] = [
        "B",
        "kB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];

    export let suffix: string;
    export let size: number;

    export function asBytes() {

    }
</script>

<span>
    <input class="size" bind:value={size} type="number"/>
    <select class="type" bind:value={suffix}>
        {#each suffixes as suffix}
            <option>{suffix}</option>
        {/each}
    </select>
</span>