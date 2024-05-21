import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

export const bootstrap = (rootElement: HTMLDivElement) => {
  const rootElementApp = document.createElement('div');
  rootElementApp.setAttribute('id', 'root');
  rootElement.appendChild(rootElementApp);

  rootElementApp!.innerHTML = `
  <div>
    <div>
      <p><a href="/app-vanilla">Go to App vanilla page</a></p>
      <button type="button" onclick="this.nextElementSibling.showModal()">Say hello</button>
      <dialog id="dialog" style="border-color: lime; width: 60vw;">
        <p>Greetings from within app-vanilla!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    </div>

    <a href="https://vitejs.dev" target="_blank">
      <img src="${new URL(viteLogo, import.meta.url).href}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
    <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
    Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

  setupCounter(rootElementApp.querySelector<HTMLButtonElement>('#counter')!)
}

export default bootstrap;