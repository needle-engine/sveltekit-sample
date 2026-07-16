<script lang="ts">
    import NeedleEngine from "../../components/NeedleEngine.svelte";
</script>

<h1>Regular HTML page</h1>
<p>Thanks for visiting!</p>

<div class="grid">
    <NeedleEngine
        camera-controls=""
        auto-rotate="true"
        autoplay="true"
        background-image="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_sunset_puresky_1k.hdr"
        environment-image="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_sunset_puresky_1k.hdr"
        src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Embedded/DamagedHelmet.gltf"
    />
    <NeedleEngine
        camera-controls=""
        autoplay="true"
        environment-image="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_sunset_puresky_1k.hdr"
        src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
    />
</div>

<style>
    .grid {
        display: flex;
        flex-flow: row;
        justify-content: center;
        flex: 1 1 auto;
    }
    @media (max-width: 700px) {
        .grid {
            flex-flow: column;
        }
    }
</style>
