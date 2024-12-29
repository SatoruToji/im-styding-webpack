import {createRoot} from 'react-dom/client'
import { App } from './components/App'
import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LazyAbout } from './pages/about/about.lazy'
import { LazyFuck } from './pages/fuck/fuck.lazy'

const root = document.getElementById('root')

if(!root) {
  throw new Error('иди нахуй')
}

const container = createRoot(root)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <Suspense fallback={'hold on...'}><LazyAbout /></Suspense>
      },
      {
        path: '/fuck',
        element: <Suspense fallback={'hold on...'}><LazyFuck /></Suspense>
      },
    ]
  }
])

container.render(<RouterProvider router={router} />)