<script lang="ts">
    import {DataType, getSuffix, convert} from '../datatypes';

    export let type: DataType = DataType.Byte;
    export let size: number = 0;
    export let name: string;
    export let value: number;
    export let min: number = 0;
    export let max: number;

    let enums: DataType[] = [];
    Object.values(DataType).filter(value => typeof DataType[value as any] === "number")
    for(let value of Object.values(DataType)) {
        let num = Number(value);
        if(!isNaN(num)) {
            enums.push(num);
        }
    }

    let select: HTMLSelectElement;
    
    function handleSelectChange() {
        let suffixBefore = type;
        type = Number(select.value);
        size = convert(size, suffixBefore, type);
        value = asBytes();
    }

    function handleSizeChange() {
        value = asBytes();
    }

    function getMaxBytes(): number {
        return convert(max, DataType.Byte, type);
    }

    export function asBytes(): number {
        return convert(size, type, DataType.Byte)
    }
</script>

<span class="size-input">
    <input {min} max={getMaxBytes()} class="size" {name} bind:value={size} type="number" on:input="{handleSizeChange}"/>
    <select class="suffix" bind:this={select} on:input={handleSelectChange}>
        {#each enums as element}
            <option value={element}>{getSuffix(element)}</option>
        {/each}
    </select>
</span>