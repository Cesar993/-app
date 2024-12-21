import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import './index.css'
import Moji, {loader as kanjiLoader} from './Paginas/Moji'
import FrontEnd from './Paginas/FrontEnd'
import Reading, { loader as readingLoader } from './Paginas/Reading'
import { Home } from './Paginas/Home'
import Material, {loader as loaderMaterial} from './Paginas/Material'
import Visuales , {loader as loaderVisuales} from './Paginas/Visuales'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <FrontEnd/>,
      children: [
        {
          index: true,
          loader: kanjiLoader,
          element: <Home/>
        },
        {
          path:'reading',
          loader: readingLoader,
          element: <Reading/>
        },
        {
          path:'vocabulario',
          loader: kanjiLoader,
          element: <Moji/>
        },
        {
          path:'material',
          loader: loaderMaterial,
          element: <Material/>
        },
        {
          path:'recursosVisuales',
          loader: loaderVisuales,
          element: <Visuales/>
        },
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
