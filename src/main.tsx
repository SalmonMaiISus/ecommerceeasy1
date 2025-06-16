import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/HomeMain'

const routers = createBrowserRouter([
  {
    
    path: "/",
    element: <Home />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
