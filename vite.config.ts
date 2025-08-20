/// <reference types="vitest" />
import { defineConfig } from "vite"
import type { CommonServerOptions } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { enhancedImages } from "@sveltejs/enhanced-img"

const serverConfig: CommonServerOptions = {
    host: "localhost",
    port: 3000,
    strictPort: true
}

export default defineConfig({
    server: serverConfig,
    preview: serverConfig,
    plugins: [sveltekit(), enhancedImages()],
    test: {
        environment: "jsdom",
        include: [
            "./src/**/*.{test,spec}.{js,ts}",
            "./tests/**/*.{test,spec}.{js,ts}"
        ]
    }
})
