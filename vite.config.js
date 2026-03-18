import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression2';
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
            useGzip(needleConfig) ? viteCompression({ deleteOriginalAssets: true, algorithms: ["gzip"], exclude: "**/.vite/manifest.json" }) : null,
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
        build: {
            emptyOutDir: true,
            keepNames: true,
        }
    }
});