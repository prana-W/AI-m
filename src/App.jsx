import { Home, ApiKeys, About, NotFound, Models } from './pages';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './Layout.jsx';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "api-keys",
        element: <ApiKeys />,
      },
      {
        path: "models",
        element: <Models />,
      },
        {
            path: "about",
            element: <About />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ],
  },
]);

function App() {
    return (
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    );
}

export default App;
