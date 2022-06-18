import React from "react";
import Login from "./components/Login";
import Daftar from "./components/Daftar";
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/daftar" element={<Daftar/>} />
      </Routes>
    </div>
  );
}

export default App;