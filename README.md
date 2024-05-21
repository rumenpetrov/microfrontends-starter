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
```

### Summary of the main technologies which are used
* [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) (could be declarative or over JS API) to encapsulate the application and to isolate styles
* [Importmap](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) - Allows using bare module names for dependency and microfrontends imports
* [URL ESM imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) in the host - Helps with loading remote ES modules
* App as [ESM export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features) (bundled as a Library) using [Vite](https://vitejs.dev/)
* [esm.sh](https://esm.sh/) CDN for the shared dependencies