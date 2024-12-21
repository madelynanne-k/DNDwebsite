import './App.css';
import Homepage from './Pages/Homepage';
import CharacterDashboard from './Pages/CharacterDashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<Homepage />} />
        <Route path = '/dashboard' element={<CharacterDashboard />} />
      </Routes>      
    </div>
  );
}

export default App;
