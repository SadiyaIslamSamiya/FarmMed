import React from 'react'
import "./App.css"
import Layout from './layout/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Dashboard from './pages/Dashboard'
import MedicineLibrary from './pages/MedicineLibrary'
import Sales from './pages/Sales'
import Suppliers from './pages/Suppliers'
import AddToLibrary from './pages/AddToLibrary'
import NotFound from './pages/NotFound'
const App = () => {
  
  const alu = createBrowserRouter( createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Dashboard/>} />
        <Route path='/medicineLibrary' element= {<MedicineLibrary/>} />
        <Route path= '/sales' element= {<Sales/>} />
        <Route path= '/suppliers' element= {<Suppliers/>} />
        <Route path= '/addtoLibrary' element= {<AddToLibrary/>} />
        <Route path= '*' element= {<NotFound/>} />
      </Route>
    </Route>
  ))


  return (
    <>
       <RouterProvider router={alu} />
    </>
  )
}

export default App
