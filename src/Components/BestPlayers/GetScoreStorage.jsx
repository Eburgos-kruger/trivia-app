import { useEffect,createContext, useState } from 'react';

export const GetScoreStorageContext = createContext(null);


const GetScoreStorage = ({children}) => {
    const [gameResults, setGameResults] = useState([]);

    const GetResults = () => {
    
    useEffect(() => {  
    const results = JSON.parse(localStorage.getItem('gameResults')) || [];
    setGameResults(results);
    }, []);
    
    }

return (
    <GetScoreStorageContext.Provider value={{ gameResults, GetResults }}>
        {children}
    </GetScoreStorageContext.Provider>
);
};
export default GetScoreStorage;