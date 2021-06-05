import React, { useState, useEffect} from 'react';
import './App.css';
import Moment from 'react-moment';
import 'moment/locale/fr';
import moment from 'moment';
import { useForm } from './useForm';
import eggs from './img/eggs.png';
import './App.css';

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

  console.log('Image par <a href="https://pixabay.com/fr/users/vipbum-3582769/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3070850">Hung Nguyen</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3070850">Pixabay</a>');
 
  useEffect(() => {
    if (moment(today).isBefore(dateLimiteExtra)) {
        setShowExtra(true)
    } else setShowExtra(false)
  }, [values])
    
  return (
    
      <div className="App">
        <header className="App-header">
          <img src={eggs} width="40%"/>
          <h1>Mes &#339;ufs sont-ils extra-frais ?</h1>
          <h2>Je saisis la date* écrite sur l'&#339;uf</h2>
          <p className='defDcr'>*DCR = Date Limite de Consommation de l'&#339;uf</p>
          <div className="App-container">
            <div className="App-content">
              {/* <label htmlFor="day">Jour </label> */}
              <input type="number" id="day" name="day" min="1" max="31" placeholder="jour" onChange={handleChange} className="input"/>
            </div>
            <div className="App-content">
              {/* <label htmlFor="month">Mois </label> */}
              <input type="number" id="month" name="month" min="1" max="12" placeholder="mois" onChange={handleChange} className="input"/>
            </div>
            <div className="App-content">
              {/* <label htmlFor="year">Année </label> */}
              <input type="number" id="year" name="year" min="2021" max="2040" value={values.year} placeholder="année" onChange={handleChange} className="input"/>
            </div>
          </div>                    
          {/* { dateIsValid ? <div>La date de consommation recommandée est le <Moment format="DD MM YYYY">{dcr}</Moment></div> : ""} */}

          {showExtra ? <div> Mes &#339;ufs sont extra-frais du <br/><Moment format="D MMM YYYY" className="date">{datePonte}</Moment> au <Moment format="D MMM YYYY" className="date">{dateLimiteExtra}</Moment></div>   : "Mon œuf n'est plus extra-frais ..."}
          <p>Nous sommes le <Moment format="D MMM YYYY"></Moment> </p>
         
        </header>       
      </div>      
  );
}

export default App;
