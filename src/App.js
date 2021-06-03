import React, { useState, useEffect} from 'react';
import './App.css';
import Moment from 'react-moment';
import 'moment/locale/fr';
import moment from 'moment';
import { useForm } from './useForm';

function App() {  
 
  
  const [values, handleChange] = useForm({ 
    day:"", 
    month:"", 
    year:moment().format('YYYY'), 
  });

  const today = new Date();
  const dcr = values.year+'-'+values.month+'-'+values.day;
  const datePonte = moment(dcr).subtract(28,'days');
  const dateLimiteExtra = moment(dcr).subtract(20,'days');
  const [showExtra, setShowExtra] = useState(false);
  const dateIsValid = moment(dcr).isValid();
 
  useEffect(() => {
    if (moment(today).isBefore(dateLimiteExtra)) {
        setShowExtra(true)
    } else setShowExtra(false)
  }, [values])
    
  return (
    
      <div className="App">
        <header className="App-header">
          <h1>Mes &#339;ufs sont-ils extra-frais ?</h1>
          <p>Veuillez saisir la date de consommation recommandée (DCR)<br />
          La DCR est la date écrite sur l'&#339;uf</p>
         
          <label htmlFor="day">Jour </label>
          <input type="number" id="day" name="day" min="1" max="31" placeholder="jour" onChange={handleChange}/><br />
          <label htmlFor="month">Mois </label>
          <input type="number" id="month" name="month" min="1" max="12" placeholder="mois" onChange={handleChange} /><br />
          <label htmlFor="year">Année </label>
          <input type="number" id="year" name="year" min="2021" max="2040" value={values.year} placeholder="année" onChange={handleChange} /><br />

          { dateIsValid ? <div>La date de consommation recommandée est le <Moment format="DD MM YYYY">{dcr}</Moment></div> : ""}

          {showExtra ? <div> Mon &#339;uf est extra frais du <Moment format="D MMM YYYY">{datePonte}</Moment> au <Moment format="D MMM YYYY">{dateLimiteExtra}</Moment></div>   : "Mon œuf n'est plus extra-frais '("}<br />
          <p>Nous sommes le <Moment format="D MMM YYYY"></Moment> </p>
        </header>       
      </div>      
  );
}

export default App;
