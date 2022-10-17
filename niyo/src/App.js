import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Outlet, useParams } from "react-router-dom";
import Events from './pages/Events';
import Museum from './pages/Museum';
import Arts from './pages/Arts';
import Galleries from './pages/Galleries';
import Login from './pages/Login';
import Explore from './pages/Explore';
import ArtDetail from './ArtDetail';


function App() {


  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="museum" element={<Museum />} />
          <Route path="arts" element={<Arts />} />
          <Route path="galleries" element={<Galleries />} />
          <Route path="login" element={<Login />} />
          <Route path="explore" exact element={<Explore />} />

          <Route path="/explore/:id" element={<ArtDetail />} />
          
           
        </Routes>
    </Router>
  );
}

export default App;
