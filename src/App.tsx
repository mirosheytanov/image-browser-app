import { createBrowserRouter, RouterProvider } from 'react-router'
import routesConfig from './routes/routesConfig'

import './App.css'

const router = createBrowserRouter(routesConfig)

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
