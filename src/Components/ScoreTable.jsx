import { useState, createContext,useEffect, useContext } from 'react';
import { UserContext } from '../Context/StateComp';
import { PrimeReactProvider } from 'primereact/api';
import '../styles/tableStyles.css';

export const ScoreTableContext = createContext(null);

const ScoreTable = ({ children }) => {

  const [gameResults, setGameResults] = useState([]);
  const { newResult } = useContext(UserContext);
  
 
  
      useEffect(() => {  
      const results = JSON.parse(localStorage.getItem('gameResults')) || [];
      setGameResults(results);
      }, [newResult]);
      
      

  const ShowScoreTable = () => {
        
        return (
           
          <div>
              <h2>Mejores Jugadores</h2>
              <table className='table-container table'>
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Usuario</th>
                          <th>Puntuación</th>
                      </tr>
                  </thead>
                  <tbody>
                      {gameResults
                          .sort((a, b) => b.score - a.score)
                          .map((result, index) => (
                              <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{result.user}</td>
                                  <td>{result.score}</td>
                              </tr>
                          ))}
                  </tbody>
              </table>
          </div>
        );
  };

  return (
    
    <ScoreTableContext.Provider value={{ ShowScoreTable }}>
     
      {children}
      
    </ScoreTableContext.Provider>
    
    
  );
};

export default ScoreTable;