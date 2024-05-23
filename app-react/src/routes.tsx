import Root from './components/Root'
import Home from './pages/Home'
import About from './pages/About'
import AppReactPage from './pages/AppReactPage'

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/app-react",
        element: <AppReactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Unknown page</h1>,
  },
];

export default routes;