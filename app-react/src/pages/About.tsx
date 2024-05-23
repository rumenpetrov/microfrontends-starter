import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const About = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1>About</h1>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={new URL(viteLogo, import.meta.url).href} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={new URL(reactLogo, import.meta.url).href} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
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

export default About
