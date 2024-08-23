<script>
    import NeedleEngine from "../components/NeedleEngine.svelte";
</script>

<div class="cols">
    <NeedleEngine />

    <div class="intro">
        <h1>Needle 💚 Sveltekit</h1>
        <h2 class="subtitle">
            This is an example page built with <a href="https://kit.svelte.dev/"
                >Sveltekit</a
            >
            and <a href="https://needle.tools">Needle&nbsp;Engine</a>
        </h2>
        <p>
            You can use this as a starting point for building your own Needle
            Engine experiences with Sveltekit.
        </p>
        <p>
            Find the repository <a
                href="https://github.com/needle-engine/sveltekit-sample"
                >here on github</a
            >. 
            The repository is setup to be automatically built and deployed too
            with Github Actions 😊
        </p>
    </div>
</div>

<style>
    .cols {
        display: flex;
        flex-flow: row;
        justify-content: center;
        flex: 1 1 auto;
    }
    .intro {
        max-width: 500px;
        margin: 2em;
    }
    @media (max-width: 1100px) {
        .cols {
            flex-flow: column;
        }
        .intro {
            margin: 1em;
        }
    }
</style>
