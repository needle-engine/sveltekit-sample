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
        build: {
            emptyOutDir: true,
            keepNames: true,
        }
    }
});