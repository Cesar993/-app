import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import './index.css'
import Index, {loader as kanjiLoader} from './Paginas/Index'
import FrontEnd from './Paginas/FrontEnd'
import Reading, { loader as readingLoader } from './Paginas/Reading'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <FrontEnd/>,
      children: [
        {
          index: true,
          loader: kanjiLoader,
          element: <Index/>
        },
        {
          path:'reading',
          loader: readingLoader,
          element: <Reading/>
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
