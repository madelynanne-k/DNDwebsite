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
import Level2 from './Pages/Spells/Level2';
import Level3 from './Pages/Spells/Level3';
import Level4 from './Pages/Spells/Level4';
import Level5 from './Pages/Spells/Level5';
import Level6 from './Pages/Spells/Level6';
import Level7 from './Pages/Spells/Level7';
import Level8 from './Pages/Spells/Level8';
import Level9 from './Pages/Spells/Level9';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard/:id' element={<CharacterDashboard />} />
        <Route path='/weapons' element={<Weapons />} />
        <Route path='/spellsLanding' element={<SpellsLandingPage />} />
        <Route path='/spells/1' element={<Level1 />} />
        <Route path='/spells/2' element={<Level2 />} />
        <Route path='/spells/3' element={<Level3 />} />
        <Route path='/spells/4' element={<Level4 />} />
        <Route path='/spells/5' element={<Level5 />} />
        <Route path='/spells/6' element={<Level6 />} />
        <Route path='/spells/7' element={<Level7 />} />
        <Route path='/spells/8' element={<Level8 />} />
        <Route path='/spells/9' element={<Level9 />} />
        <Route path='/allSpells' element={<AllSpells />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/actionsLanding' element={<ActionsLandingPage />} />
        <Route path="/featsTraits" element={<FeaturesAndTraits />} />
        <Route path='/backgroundLanding' element={<BackgroundLandingPage />} />
      </Routes>
    </div>


  );
}

export default App;
