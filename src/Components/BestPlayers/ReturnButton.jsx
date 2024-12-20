import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const ReturnButtonContext = createContext(null);

const ReturnButton = ({ children }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/');
    console.log('reiniciando');``
  };

  return (
    <ReturnButtonContext.Provider value={{ handleRestart }}>
      {children}
    </ReturnButtonContext.Provider>
  );
};

export default ReturnButton;
