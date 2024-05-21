import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

export const bootstrap = (rootElement: HTMLDivElement) => {
  const rootElementApp = document.createElement('div');
  rootElementApp.setAttribute('id', 'root');
  rootElement.appendChild(rootElementApp);

  ReactDOM.createRoot(rootElementApp).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

export default bootstrap
