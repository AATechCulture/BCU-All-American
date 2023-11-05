import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Form from './pages/Form.jsx' 
import Queue from './pages/Queue.jsx';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/queue" element={<Queue/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


