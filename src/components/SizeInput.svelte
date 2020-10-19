<script lang="ts">
<<<<<<< HEAD
    import {DataType, getSuffix, convert} from '../datatypes';

    export let type: DataType = DataType.Byte;
    export let size: number = 0;
    export let name: string = "";

    let enums: DataType[] = [];
    Object.values(DataType).filter(value => typeof DataType[value as any] === "number")
    for(let value of Object.values(DataType)) {
        let num = Number(value);
        if(!isNaN(num)) {
            enums.push(num);
        }
    }

    let select: HTMLSelectElement;
    
    function handleChange() {
        let suffixBefore = type;
        type = Number(select.value);
        size = convert(size, suffixBefore, type);
    }

    export function asBytes() {
        convert(size, type, DataType.Byte)
    }
</script>

<span class="size-input">
    <input class="size" {name} bind:value={size} type="number"/>
    <select class="suffix" bind:this={select} on:blur={handleChange}>
        {#each enums as element}
            <option value={element}>{getSuffix(element)}</option>
=======
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
>>>>>>> 412c6e2315cc2cb35ff9fc932777971a14610b02
        {/each}
    </select>
</span>