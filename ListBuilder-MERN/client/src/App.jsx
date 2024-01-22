import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUnit from "./pages/AddUnit";
import ShowList from "./pages/ShowList";
import DeleteUnit from "./pages/DeleteUnit";
import EditUnit from "./pages/EditUnit";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/units/create' element={<AddUnit />}/>
      <Route path='/units/list' element={<ShowList />}/>
      <Route path='/units/delete/:id' element={<DeleteUnit />}/>
      <Route path='/units/edit/:id' element={<EditUnit />}/>
    </Routes>
  )
}

export default App