import React, { useState, useEffect} from 'react';
import useModal from "./useModal";
import Modal from "./modal";
import './App.css';
import Moment from 'react-moment';
import 'moment/locale/fr';
import moment from 'moment';
import eggs from './img/eggs.png';
import './App.css';
import DatePicker,{registerLocale, setDefaultLocale } from 'react-datepicker';
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import fr from 'date-fns/locale/fr';
// import ReactCircleModal from 'react-circle-modal';
registerLocale('fr', fr);
setDefaultLocale('fr');


function App() {  

  console.log('Image par <a href="https://pixabay.com/fr/users/vipbum-3582769/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3070850">Hung Nguyen</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3070850">Pixabay</a>');
  console.log('#######################################################');
  console.log('##                    Carole Barbier                 ##');
  console.log('##  développeuse full stack JS / React / NodeJs ...  ##');
  console.log('##                 dans le Var (France)              ##');
  console.log('## linkedin : https://linkedin.com/in/carole-barbier ##'); 
  console.log('##    Email : contact@carolebarbier.com              ##');
  console.log('## Site web : carolebarbier.com (en cours de dév)    ##');
  console.log('#######################################################');


  const now = new Date();  

  const [dcr, setDcr] = useState(null);

 
  const datePonte = moment(dcr).subtract(28,'days');
  const dateLimiteExtra = moment(dcr).subtract(20,'days');

  const nowFormated= moment(now,"YYYY-MM-DD");
  const dateLimiteExtraFormated = moment(dcr,"YYYY-MM-DD").subtract(20,'days');
  // const dateDcrMaxExtra = moment(nowFormated).add(20,'days');
  const dateDcrMaxExtra=moment(nowFormated).add(20, 'days');
  console.log('dateDcrMaxExtra',dateDcrMaxExtra);
  const diffDay = (moment(dateLimiteExtraFormated).diff(nowFormated, 'days'));
  const diffDayNotExtra = diffDay*-1;

  const [showExtra, setShowExtra] = useState(false);
  const [dateIsValid, setDateIsValid] = useState(false);
  console.log('dateIsValid', dateIsValid);

  const { isShowing, toggle } = useModal();

  const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );

  useEffect(() => {
  if (moment(now).isBefore(dateLimiteExtra)) {
      setShowExtra(true)
  } else setShowExtra(false)
  
  setDateIsValid(moment(dcr,"YYYY-MM-DD", true).isValid())    
  }, [dcr])

  
      
  return (
    
      <div className="App">
        <div className="App-content">
          <header className="App-header">
            <img src={eggs} width="60%" />
            <h1>Mes &#339;ufs sont-ils extra-frais ?</h1>
          </header>
          <section className="App-section">
            <article>
              <p><em className="number">1</em><br />Je saisis la date (DCR) &nbsp;  
              
              <button className="modal-toggle" onClick={toggle}>
              ?
              </button><br />
              <Modal isShowing={isShowing} hide={toggle} />

              écrite sur l'&#339;uf ou la boîte<br/><em className="arrow">↓</em></p>
            </article>
            <article>
              <div>
                        
                {/* <DatePicker
                  selected={dcr}
                  onChange={(date) => setDcr(date)}
                  calendarContainer={MyContainer}
                  locale="fr"
                  inline
                  calendarStartDay={1}
                /> */}
                
                <DatePicker
                  selected={dcr}
                  onChange={(date) => setDcr(date)}
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 28)}
                  locale="fr"                
                  placeholderText="Je saisis ici"
                  calendarStartDay={1}
                  dateFormat="dd/MM"
                  showDisabledMonthNavigation
                  disabledKeyboardNavigation
                />
              
              </div>                  
              
              {(() => {
                if (dateIsValid) {
                  if(showExtra) {
                    return (
                      <div>
                        <p>
                          <em className="number">2</em><br />                       
                          Réponse
                        </p>
                        <div className="messageResult"> <Emoji label="smiling face with smiling eyes" symbol="😊"/> Ils sont Extra-frais du <Moment format="D MMM" className="date">{datePonte}</Moment>au <Moment format="D MMM" className="date">{dateLimiteExtra}</Moment><br /> soit encore <span className="date">{diffDay+1}</span> jour(s)
                        </div>
                        
                      </div>
                    )
                  }
                  return (
                    <div>
                      <p>
                        <em className="number">2</em><br />                   
                        Réponse
                      </p>
                      <div className="messageResult"> <Emoji label="confused face" symbol="😕"/> Mes &#339;ufs <span className='bold'>ne sont plus </span> extra-frais depuis {diffDayNotExtra===0 ? "aujourd'hui":''} {diffDayNotExtra===1 ? "hier":''} {diffDayNotExtra>1 ? diffDayNotExtra+" jours":''}.<br/>La DCR doit être supérieure au <Moment format="D MMM" className="date">{dateDcrMaxExtra}</Moment>.</div>
                    </div>
                  )
                }
                })()} 
            
              {/* <p>Nous sommes le <Moment format="D MMM YYYY"></Moment> </p> */}
            </article>
          </section>
        </div>
        <footer>
        Contacter le développeur : <a href='https://carolebarbier.com' target="_blank" className='date'> Carole Barbier </a>
        <Emoji label="speech balloon" symbol="💬"/>
        </footer>     
              
      </div>      
  );
}

export default App;


