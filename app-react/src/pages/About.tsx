import React, { SyntheticEvent } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { useStore } from '@nanostores/react';
// @ts-ignore
import { $counter, counterAdd } from 'http://localhost:9300/counter.js';

const About = () => {
  const [count, setCount] = React.useState(0)
  const counter = useStore($counter);

  const handleAdd = (event: SyntheticEvent<HTMLButtonElement>) => {
    setCount((count) => {
      const nextValue = count + 1;
      const customEvent = new CustomEvent('embed-counter-change', {
        bubbles: true,
        composed: true,
        detail: {
          embedName: 'app-react',
          count: nextValue,
        }
      });

      event.target.dispatchEvent(customEvent);

      return nextValue;
    });
  }

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
        <button onClick={handleAdd}>
          count is {count}
        </button>
        <button onClick={counterAdd}>
          global counter is {counter}
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
