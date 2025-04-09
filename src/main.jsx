import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//paginas
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Port from './routes/Port.jsx'
import Skill from './routes/Skill.jsx'




const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/About",
        element: <About/>,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/Port",
        element: <Port/>,
      },
      {
        path: "/Skill",
        element: <Skill/>,
      },

    ],
  },{
    basename: "/portifolio"
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} basename="portifolio"/>
  </StrictMode>,
)
