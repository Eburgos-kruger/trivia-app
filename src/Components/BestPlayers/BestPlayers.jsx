
import { useContext } from 'react';
import { ReturnButtonContext } from './ReturnButton';
import {ScoreTableContext} from '../ScoreTable';
import '../../styles/HomeStyles.css';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';

const BestPlayers = () => {
    const {ShowScoreTable} = useContext(ScoreTableContext);
    const { handleRestart   } = useContext(ReturnButtonContext);
    
        
 
    return (
        <PrimeReactProvider>
        <div className="home">
        <ShowScoreTable />
        <div>
             <Button onClick={handleRestart}>
                Reiniciar
             </Button>
             
             </div>
             <br />
        </div>
        </PrimeReactProvider>
    );
};

export default BestPlayers;