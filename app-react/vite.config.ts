// import { resolve } from 'path';
import { peerDependencies } from './package.json';
import { defineConfig } from 'vite'
import cssInject from "vite-plugin-css-injected-by-js";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 9200,
  },
  build: {
    rollupOptions: {
      // Defines external dependencies that shouldn't be bundled with your library
      external: [...Object.keys(peerDependencies)],
      // input: resolve(__dirname, "src/index.ts"),
      input: "src/index.ts",
      preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    cssInject({
      injectCodeFunction,
    }),
  ],
})

function injectCodeFunction(cssCode: string, options: InjectCodeOptions) {
  try {
    const embedName = 'app-react';

    if (typeof document == 'undefined' || document.readyState !== 'complete') {
      setTimeout(() => injectCodeFunction(cssCode, options), 10);
      return undefined;
    }

    const hostElementList = document.querySelectorAll(`[data-embedded-app-name="${embedName}"]`);

    if (!hostElementList || hostElementList.length < 1) {
      return undefined;
    }

    hostElementList.forEach((hostElement) => {
      const rootElement = hostElement.shadowRoot;
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(cssCode);

      if (rootElement) {
        rootElement.adoptedStyleSheets = [sheet];

        const customEvent = new CustomEvent('embed-styles-loaded', {
          bubbles: false,
          composed: false,
          detail: {
            embedName,
          }
        });

        rootElement.dispatchEvent(customEvent);
      } else {
        throw new Error('Missing rootElement.');
      }
    });
  } catch (e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }

  return undefined;
}