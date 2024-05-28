import { defineConfig } from 'vite'
// import { peerDependencies } from './package.json';
import cssInject from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  preview: {
    port: 30100,
  },
  build: {
    lib: {
      entry: './src/bootstrap.ts',
      fileName: 'bundle',
      formats: ['es'],
    },
    rollupOptions: {
      // Defines external dependencies that shouldn't be bundled with your library
      // external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    cssInject({
      injectCodeFunction,
    }),
  ],
})

function injectCodeFunction(cssCode: string, options: InjectCodeOptions) {
  try {
    if (typeof document == 'undefined' || document.readyState !== 'complete') {
      setTimeout(() => injectCodeFunction(cssCode, options), 10);
      return undefined;
    }

    const hostElementList = document.querySelectorAll('[data-embedded-app-name="app-vanilla"]');

    if (!hostElementList || hostElementList.length < 1) {
      return undefined;
    }

    hostElementList.forEach((hostElement) => {
      const rootElement = hostElement.shadowRoot;
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(cssCode);

      if (rootElement) {
        rootElement.adoptedStyleSheets = [sheet];
      } else {
        throw new Error('Missing rootElement.');
      }
    });
  } catch (e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }

  return undefined;
}