import { PrimeReactProvider } from 'primereact/api';
import { Route, Routes } from 'react-router-dom';
import StateComp from './Context/StateComp';
import Home from './Components/Home/Home';
import Questions from './Components/Questions/Questions';
import BestPlayers from './Components/BestPlayers/BestPlayers';
import ReturnButton from './Components/BestPlayers/ReturnButton';
import ScoreTable from './Components/ScoreTable';
import './styles/HomeStyles.css';


function App() {
  return (
    <div className="app-background">
    <PrimeReactProvider>

        <StateComp>
        
        <ReturnButton>
        <ScoreTable>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/best-players" element={<BestPlayers />} />
          </Routes>
          </ScoreTable>
          </ReturnButton> 
          
      </StateComp>
     
      
    </PrimeReactProvider>
    </div>
  );
}

export default App;
