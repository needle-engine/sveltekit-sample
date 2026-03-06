<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/state";
    import NeedleEngine from "../../components/NeedleEngine.svelte";
    import type { Snippet } from "svelte";

    let { data, children }: {
        data: { entries: Array<{ name: string; url: string }> };
        children: Snippet;
    } = $props();

    let src = $derived(page.data.sceneFile as string | undefined);
</script>

<menu>
    Select a example scene →
    {#each data.entries as entry}
        <a href="{base}/scenes/{entry.url}">{entry.name}</a>
    {/each} <span class="hint">note that each scene is a separate route</span>
</menu>

{#if src}
    <NeedleEngine src="{base}/{src}" />
{/if}
{@render children()}

<!-- for debugging -->
<!-- <pre>{JSON.stringify($page, null, 2)}</pre> -->
<style>
    menu {
        padding: 10px;
        border-radius: 40px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    menu a {
        margin: 4px 10px;
        text-decoration: none;
    }
    .hint {
        color: rgba(0, 0, 0, 0.6);
        font-style: italic;
    }
</style>
