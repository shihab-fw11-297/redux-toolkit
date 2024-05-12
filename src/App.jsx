import React from 'react'
import Create from './component/Create'
import Navbar from './component/Navbar'
import Read from './component/Read'
import Update from './component/Update'



import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Example/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App