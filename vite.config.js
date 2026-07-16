import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';

// Load environment variables
import dotenv from "dotenv";


export default defineConfig(async ({ command }) => {

    dotenv.config();

    const { needlePlugins, useGzip, loadConfig } = await import("@needle-tools/engine/vite");
    const needleConfig = await loadConfig() ?? undefined;
    return {
        plugins: [
            viteBasicSslPlugin(),
            needlePlugins(command, needleConfig),
            sveltekit(),
        ],
        server: {
            port: 3000,
            proxy: {},
            fs: {
                strict: false,
            },
        },
        // The Needle production plugin emits `@needle-tools/engine/needle-app` as an entry chunk.
        // In SvelteKit's SSR build pass that package would otherwise be externalized, and rollup
        // forbids a module being both an entry point and external. Bundling it in SSR avoids the
        // "Entry module ... cannot be external" error (safe since engine 5 is SSR-friendly).
        ssr: {
            noExternal: ['@needle-tools/engine'],
        },
        build: {
            emptyOutDir: true,
            keepNames: true,
        }
    }
});