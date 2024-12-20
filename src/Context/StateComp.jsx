
import  {useState, createContext} from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext(null);

const StateComp = ({children}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [numberQuestions, setNumberQuestions] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [newResult, setNewResult] = useState({});
    
    const FinalScore = () => {
        let gameResults = JSON.parse(localStorage.getItem('gameResults')) || [];
    
        const updatedResult = { user, score: currentScore };
        setNewResult(updatedResult);
    
        gameResults.push(updatedResult);
    
        localStorage.setItem('gameResults', JSON.stringify(gameResults));

        setCurrentScore(0);
    
        navigate('/best-players');

        return;
    };
    

return (
    <UserContext.Provider value={{user, setUser, numberQuestions, setNumberQuestions, FinalScore, setCurrentScore, currentScore, newResult }}>
        {children}
    </UserContext.Provider>
)
}

export default StateComp;

