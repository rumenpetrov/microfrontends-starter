import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = React.useState(0)
  const ref = React.useRef<HTMLDialogElement>(null)

  const handleClick = () => {
    if (ref.current) {
      ref.current.showModal();
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '50px'}}>
        <h1>Remote React v{React.version}</h1>

        <div>
          <p><a href="/app-react">Go to App vanilla page</a></p>

          <button type="button" onClick={handleClick}>Say hello</button>

          <dialog ref={ref} style={{ borderColor: 'lime', width: '60vw' }}>
            <p>Greetings from within app-react!</p>
            <form method="dialog">
              <button>OK</button>
            </form>
          </dialog>
        </div>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={new URL(viteLogo, import.meta.url).href} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={new URL(reactLogo, import.meta.url).href} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
