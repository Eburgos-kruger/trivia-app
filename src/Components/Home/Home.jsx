import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { UserContext } from "../../Context/StateComp";
import { ScoreTableContext } from "../ScoreTable";
import '../../styles/HomeStyles.css';




function Home() {

const {ShowScoreTable} = useContext(ScoreTableContext);
  const {setUser, setNumberQuestions } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');
  const [userNumberQuestions, setUserNumberQuestions] = useState(0);
  
 

  const navigate = useNavigate();

  const handleInputChange = (e) => {
	setInputValue(e.target.value);
	
  };

  const handleInputChangeNumber = (e) => {
	setUserNumberQuestions(e.target.value);
  };

  const handleSubmit = (e) => {
	e.preventDefault();
	setUser(inputValue);
	setNumberQuestions(userNumberQuestions);
	navigate('/questions');
	

  };

  return (
	<PrimeReactProvider>
	<div className="home">
	  <h1>Bienvenido al Trivia Quiz</h1>
	  <div>
		
		<form onSubmit={handleSubmit}>
		<h4>Ingrese su nombre:</h4>
    	<InputText  id="username" value={inputValue} onChange={handleInputChange}/>
		  <h4>Ingrese número de preguntas:</h4>
		  <InputText 
			type="number" 
			placeholder="Ingrese numero de preguntas" 
			value={userNumberQuestions}
			onChange={handleInputChangeNumber}
		  />
		  <br />
		  <br />
		  <Button type="submit">Ingresar</Button>
		</form>
	  </div>
	  
	  <ShowScoreTable/>
	</div>
	</PrimeReactProvider>
  );
}

export default Home;