import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


import './index.css'
import Index, {loader as kanjiLoader} from './Paginas/Index'
import FrontEnd from './Paginas/FrontEnd'


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
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
