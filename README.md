# microfrontends-starter
Explore alternatives to iframes when embedding applications in another application which serves as a host for the rest.

In order to provide more features and functionalities, some large applications allow extending them in form of an extensions, plugins, integrations or modules. Often these are just external applications embedded in the host application using iframes. This approach is widely used but it has his pros and cons. We are starting to get some, arguably, better alternatives when using modern technologies. Find more about the problem and the suggested solution on [this](https://github.com/rumenpetrov/microfrontends-starter/wiki/Embedded-and-encapsulated-application-alternative-to-ifames-proposal) page.

### Project structure
The host and all embedded application are placed at the root directory of the project for ease of use but each of them could have separate repository and has his own build setup.

### How to run application
Every application have to build and served separately, if you want everything to work together.

```bash
# Navigate to the folder of the application you want to run
$ cd host

# Build the application
$ npm run build

# Serve the application
$ npm run preview

# Run the application in dev mode for local development
$ npm run dev
```

### Summary of the main technologies which are used
* [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) (could be declarative or over JS API) to encapsulate the application and to isolate styles
* [Importmap](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) - Allows using bare module names for dependency and microfrontends imports
* [URL ESM imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) in the host - Helps with loading remote ES modules
* App as [ESM export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features) (bundled as a Library) using [Vite](https://vitejs.dev/)
* [esm.sh](https://esm.sh/) CDN for the shared dependencies

### Key points to prepare MFE application
* Bundle to ESM (as library)
* Host the child application with CORS origin set to the host application URL
* Use static port which is inline with the host setup and don't conflict with other embedded apps
* Define shared packages as peerDependencies and copy them to devDependencies as well
* Use absolute URLs for linking static assets
* Each application has reserved element in host where it will be running. The selector for this element is used to add a Shadow DOM and to know where to insert styles
* Element selector/ID from the host should be provided to the embedded application for using in the import styles script (build setup)
  * E.g. `data-embedded-app-name="app-react"`, `#app-react`
  * Vite Plugin and custom setup is used for inserting the remote styles in the host Shadow DOM
* Each application should export bootstrap function which takes care initialization
* Each application should limit its interactions with `document`, `body` or `window` because it is going to be placed in a Shadow DOM
* Each application should limit the styles it puts on `html` and `body` because it is going to be placed in a Shadow DOM

### Refs:
* [YOU MIGHT NOT NEED MODULE FEDERATION (importmaps)](https://www.mercedes-benz.io/blog/2023-01-05-you-might-not-need-module-federation-orchestrate-your-microfrontends-at-runtime-with-import-maps)
* [MFEs with Astro](https://medium.com/@sergio.a.soria/setting-up-micro-frontends-with-astro-and-ecma-script-modules-137340d2c520)
* [Shadow DOM only approach article](https://medium.com/bbc-product-technology/goodbye-iframes-6c84a651e137)
* [NX](https://nx.dev/)
* [Wrap elements with Shadow DOM](https://css-tricks.com/playing-shadow-dom/)
* [Everything You Need to Know About Import Maps](https://www.honeybadger.io/blog/import-maps/)
* [Bundle setup](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)
* [Vite bundle](https://vitejs.dev/guide/build)
* [Shadow DOM portals concept](https://dev.to/westbrook/your-content-in-shadow-dom-portals-3cdb)