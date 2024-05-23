import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import routes from './routes'
import './App.css'

type Props = {
  basename?: string;
}

const App = ({ basename }: Props) => {
  const router = React.useMemo(() => createBrowserRouter(routes, { basename }), [basename]);

  return (
    <div>
      <p><strong>Basename:</strong> {basename || 'Not set'}</p>

      <RouterProvider router={router} />
    </div>
  )
}

export default App
