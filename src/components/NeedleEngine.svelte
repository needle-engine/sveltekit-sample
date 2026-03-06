<script lang="ts">
    import { onMount } from "svelte";

    let src = $state("");
    let { ...restProps } = $props();

    onMount(async () => {
        await import("@needle-tools/engine");
        await import("../generated/gen.js");
        // in case no src is defined we use the global variable that is set inside of the codegen file gen.js
        src = globalThis["needle:codegen_files"] as any;
    });
</script>

<needle-engine loading-style="light" {src} {...restProps} />

<style>
    needle-engine {
        position: relative;
        min-height: 200px;
        flex: 1 1 auto;

        /** round corners */
        border-radius: 1em;
        overflow: hidden;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        border: 1px solid white;
    }
</style>
