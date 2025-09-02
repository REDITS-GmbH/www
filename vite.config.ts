import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    cloudflare(),
    // Gzip compression
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,      // Remove console logs
        drop_debugger: true,     // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 2,               // Multiple passes for better compression
      },
      mangle: {
        properties: {
          regex: /^_/,           // Mangle properties starting with _
        },
        toplevel: true,          // Mangle top-level variable names
      },
      format: {
        comments: false,         // Remove all comments
      },
    },
    cssMinify: true,             // Minify CSS
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Hash filenames for better caching and obfuscation
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
      },
    },
    reportCompressedSize: false, // Faster builds
    chunkSizeWarningLimit: 500,  // Warn for large chunks
    sourcemap: false,            // Disable source maps in production
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});