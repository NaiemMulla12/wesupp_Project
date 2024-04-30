import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Layout from './Layout.jsx'
import { Home,Notfound,UnderConstructionPage } from './Export.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='*' element={<Notfound />} />
      <Route path='/UnderConstructionPage' element={<UnderConstructionPage />} />
      {/* <Route path='#' element={<About />} />
      <Route path='#' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> */}
     
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
