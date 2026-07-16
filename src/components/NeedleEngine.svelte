<script lang="ts">
    // Needle Engine 5 supports top-level imports, so the engine no longer needs
    // to be dynamically imported inside onMount.
    import "@needle-tools/engine";
    import type { NeedleEngineAttributes } from "@needle-tools/engine";
    import { onMount } from "svelte";

    let src = $state("");
    // $props() has no generic form — annotate the destructuring target instead.
    // Partial<> because consumers only pass the attributes they need.
    let { ...restProps }: Partial<NeedleEngineAttributes> = $props();

    onMount(async () => {
        // gen.js is generated codegen that touches `document`, so it stays
        // browser-only (the app is prerendered).
        await import("../generated/gen.js");
        // in case no src is defined we use the global variable that is set inside of the codegen file gen.js
        src = globalThis["needle:codegen_files"] as any;
    });
</script>

<needle-engine {src} {...restProps}></needle-engine>

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
