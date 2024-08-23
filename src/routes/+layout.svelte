<script lang="ts">
    import "../global.css";
    import { base } from "$app/paths";
</script>

<div class="app">
    <div class="header">
        <a href="{base}/">Home</a>
        <a href="{base}/markdown">Markdown Page</a>
        <a href="{base}/regular">Regular Page</a>
        <a href="{base}/scenes">Scenes</a>
        <a href="https://needle.tools">Needle</a>
        <a href="https://github.com/needle-engine/sveltekit-sample">Github</a>
    </div>
    <main>
        <slot />
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-flow: column;
        height: 100%;
        padding: 1.5em;
    }

    main {
        position: relative;
        flex: 1 1 auto;
        flex-flow: column;
        display: flex;
    }

    .header {
        position: sticky;
        top: .7em;
        z-index: 999;

        display: inline-block;
        padding: 1rem;
        background: #eee;
        border: 1px solid #ccc;
        border-radius: 50px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 1em;
    }
    .header a {
        margin: 0 1rem;
        font-weight: bold;
    }
</style>
