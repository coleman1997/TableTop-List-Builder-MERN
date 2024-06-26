import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUnit from "./pages/AddUnit";
import DeleteUnit from "./pages/DeleteUnit";
import EditUnit from "./pages/EditUnit";
import UnitDetails from "./pages/UnitDetails";
import ListDisplay from "./pages/ListDisplay";
import DeleteListUnit from "./pages/DeleteListUnit";
import ListUnitDetails from "./pages/ListUnitDetails";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/units/create' element={<AddUnit />}/>
      <Route path='/units/delete/:id' element={<DeleteUnit />}/>
      <Route path='/list/delete/:id' element={<DeleteListUnit />}/>
      <Route path='/units/edit/:id' element={<EditUnit />}/>
      <Route path='/units/details/:id' element={<UnitDetails />}/>
      <Route path='/list/details/:id' element={<ListUnitDetails />}/>
      <Route path='/list' element={<ListDisplay />}/>
    </Routes>
  )
}

export default App