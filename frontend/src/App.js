import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Form from './pages/Form.jsx' 
import Queue from './pages/Queue.jsx';
import Game from './pages/Game.jsx';
import Destination from './pages/Destination.jsx';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/queue" element={<Queue/>} />
          <Route path="/game" element={<Game/>} />
          <Route path="/tour" element={<Destination/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


