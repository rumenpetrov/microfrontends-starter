import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { peerDependencies } from './package.json';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    /*
     * There is a limitation with the DEV server and MFE externals importmap import by name.
     * https://stackoverflow.com/questions/76259677/vite-dev-server-throws-error-when-resolving-external-path-from-importmap
     * https://github.com/vitejs/vite/issues/6582
     */
    {
      name: 'importmap-externals',
      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if (target === 'client') {
            vite.build.rollupOptions['external'] = [...Object.keys(peerDependencies)];
          }
        }
      }
    },
  ],
  vite: {
    build: {
      rollupOptions: {
        // Defines external dependencies that shouldn't be bundled with your library
        external: [...Object.keys(peerDependencies)],
      },
    }
  }
});