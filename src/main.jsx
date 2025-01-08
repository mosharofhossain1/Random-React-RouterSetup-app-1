import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Service/Service.jsx'
import Bloge from './components/Bloge/Bloge.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/service',
        element: <Services></Services>
      },
      {
        path: '/bloge',
        element: <Bloge></Bloge>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
