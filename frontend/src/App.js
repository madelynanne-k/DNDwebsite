import './App.css';
import Homepage from './Pages/Homepage';
import CharacterDashboard from './Pages/CharacterDashboard';
import {Route, Routes } from 'react-router-dom';
import Weapons from './Pages/Weapons';
import SpellsLandingPage from './Pages/SpellsLandingPage';
import Inventory from './Pages/Inventory';
import ActionsLandingPage from './Pages/ActionsLandingPage';
import FeaturesAndTraits from './Pages/FeaturesAndTraits';
import BackgroundLandingPage from './Pages/BackgroundLandingPage';
import Level1 from './Pages/Spells/Level1';
import AllSpells from './Pages/Spells/AllSpells';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/dashboard/:id' element={<CharacterDashboard />} />
        <Route path='/weapons' element={<Weapons />} />
        <Route path='/spellsLanding' element={<SpellsLandingPage />} />
        <Route path='/spellsLevel1' element={<Level1 />}/>
        <Route path='/allSpells' element={<AllSpells />}/>
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/actionsLanding' element={<ActionsLandingPage />} />
        <Route path="/featsTraits" element={<FeaturesAndTraits />} />
        <Route path='/backgroundLanding' element={<BackgroundLandingPage />} />
      </Routes>
    </div>


  );
}

export default App;
