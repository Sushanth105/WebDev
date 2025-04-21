import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContectUs from './pages/ContectUs.jsx'
import User from './pages/User.jsx'
import './index.css'

const router = createBrowserRouter([
  {path : "/" , element : <Home/>},
  {path : "/About" , element : <About/>},
  {path : "/ContectUs" , element : <ContectUs/>},
  {path : "/User/:name" , element : <User great="hiii" />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
