import { useState } from 'react'
import Routes from './Routes/Routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  
const routes=createBrowserRouter(Routes)
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
