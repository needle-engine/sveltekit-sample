import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { sveltekit } from '@sveltejs/kit/vite';
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';

// https://github.com/sapphi-red/vite-plugin-static-copy#usage
import { viteStaticCopy } from 'vite-plugin-static-copy'

// Load environment variables
import dotenv from "dotenv";


const files = new Array();

export default defineConfig(async ({ command }) => {

    dotenv.config();

    const { needlePlugins, useGzip, loadConfig } = await import("@needle-tools/engine/vite");
    const needleConfig = await loadConfig();
    return {
        plugins: [
            viteBasicSslPlugin(),
            useGzip(needleConfig) ? viteCompression({ deleteOriginFile: true }) : null,
            needlePlugins(command, needleConfig),
            viteStaticCopy({
                targets: files.map((file) => {
                    return {
                        src: file.path,
                        dest: "downloads",
                    }
                }),
            }),
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