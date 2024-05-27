import { version } from 'react'
// import { lazy, Suspense, version } from 'react'
// import ReactErrorBoundery from "./error-boundery"
// import App from "http://localhost:9200/bundle.js?url"
import { useStore } from '@nanostores/react';
// @ts-ignore
import { $counter, counterAdd } from 'http://localhost:9300/counter.js';
// @ts-ignore
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

// Lazy load
// const App = lazy(() => import('http://localhost:9200/bundle.js'));

export const AstroReact = () => {
  const counter = useStore($counter);

  const styles = {
    padding: '8px',
    border: '2px dashed var(--palette-astro)',
    backgroundColor: 'color-mix(in oklab, var(--palette-react) 30%, transparent)',
  };

  return (
    <div style={styles}>
      <h1>Astro React component - v{version}</h1>

      <p>Counter: {counter}</p>

      <button
        onClick={() => {
          counterAdd();
          confetti();
        }}
      >+</button>

      {/* <ReactErrorBoundery fallback="There is a problem with loading remote App">
        <Suspense fallback="loading...">
          <App />
        </Suspense>
      </ReactErrorBoundery> */}
    </div>
  );
};

export default AstroReact;