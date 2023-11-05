import './App.css';
import HomePage from './Screens/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Screens/Game';
import Header from "./Components/Header";
import QueueStatus from './Components/QueueStatus'; // Unused import?
import JoinQueue from './Screens/JoinQueue';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/joinqueue" element={<JoinQueue />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
