// Vercel SSR build:
// - Disables the Cloudflare plugin (Workers worker output) so the SSR bundle
//   is a plain Web-standards `{ fetch }` module that runs on Vercel's Edge runtime.
// - Pins the SSR entry filename so the post-build script can wire it into
//   .vercel/output/functions/ssr.func/ deterministically.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  vite: {
    environments: {
      ssr: {
        build: {
          rollupOptions: {
            output: {
              entryFileNames: "index.js",
              chunkFileNames: "chunks/[name]-[hash].js",
              assetFileNames: "assets/[name]-[hash][extname]",
            },
          },
        },
      },
    },
  },
});
