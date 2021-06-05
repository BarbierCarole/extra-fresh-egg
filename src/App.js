import React, { useState, useEffect} from 'react';
import './App.css';
import Moment from 'react-moment';
import 'moment/locale/fr';
import moment from 'moment';
import { useForm } from './useForm';
import eggs from './img/eggs.png';
import './App.css';

function App() {  
  function formattedNumber (myNumber) { return ("0" + myNumber).slice(-2); }

  const [values, handleChange] = useForm({ 
    day:formattedNumber(), 
    month:formattedNumber(), 
    year:moment().format('YYYY'), 
  });

  const now = new Date();  
  
  const dcr = moment(values.year+'-'+values.month+'-'+values.day);
  
  const datePonte = moment(dcr).subtract(28,'days');
  const dateLimiteExtra = moment(dcr).subtract(20,'days');

  const [showExtra, setShowExtra] = useState(false);
  const [dateIsValid, setDateIsValid] = useState(false);
  console.log('dateIsValid', dateIsValid);

  console.log('Image par <a href="https://pixabay.com/fr/users/vipbum-3582769/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3070850">Hung Nguyen</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3070850">Pixabay</a>');

  useEffect(() => {
    if (moment(now).isBefore(dateLimiteExtra)) {
        setShowExtra(true)
    } else setShowExtra(false)
    
    setDateIsValid(moment(dcr,"YYYY-MM-DD", true).isValid())    
  }, [values])
    
  return (
    
      <div className="App">
        <header className="App-header">
          <img src={eggs} width="40%"/>
          <h1>Mes &#339;ufs sont-ils extra-frais ?</h1>
          <h2>Je saisis la date DCR* <br />écrite sur l'&#339;uf</h2>
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

          {/* {showExtra ? <div> Mes &#339;ufs sont extra-frais du <br/><Moment format="D MMM YYYY" className="date">{datePonte}</Moment> au <Moment format="D MMM YYYY" className="date">{dateLimiteExtra}</Moment></div>   : <div> Mes &#339;ufs ne sont plus extra-frais </div>} */}

          {(() => {
            if (dateIsValid) {
              if(showExtra) {
                return (
                  <div className="messageResult"> Mes &#339;ufs sont extra-frais du <br/><Moment format="D MMM YYYY" className="date">{datePonte}</Moment> au <Moment format="D MMM YYYY" className="date">{dateLimiteExtra}</Moment></div>
                )
              }
              return (
                <div className="messageResult"> Mes &#339;ufs <span className='bold'>ne sont plus </span> extra-frais </div>
              )
            }
            })()} 
        
          <p>Nous sommes le <Moment format="D MMM YYYY"></Moment> </p>
         
        </header>       
      </div>      
  );
}

export default App;
