import { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const languages = [
  { code: 'en', name: 'English'},
  { code: 'es', name: 'Español'},
  { code: 'fr', name: 'Français'}
]

const translations = {
  'en': {
    'header': 'Hello',
    'parraf': 'This is a parraf in English',
    'lang-choice': 'Choose your language:'
  },
  'es': {
    'header': 'Hola',
    'parraf': 'Esto es un parrafo en Español',
    'lang-choice': 'Escoge tu idioma:'
  },
  'fr': {
    'header': 'Salut',
    'parraf': 'C´est un paragraphe en français',
    'lang-choice': 'Choisissez votre langue:'
  }
}

const getTranslation = (lang, text) => {
  return translations[lang][text];
}

function App() {
  
  const [lang, setLang] = useState('es')

  const changeLanguageHandler = (lang) => {
    setLang( lang );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="helloHeader">
          {getTranslation(lang, 'header')}
        </h2>
        <p className="parraf">
          {getTranslation(lang, 'parraf')}
        </p>
        <p className="small">
          {getTranslation(lang, 'lang-choice')}
        </p>
        <LanguageSwitcherSelector 
          lang={lang}
          handleChangeLanguage={changeLanguageHandler}
        />
      </header>
    </div>
  );
}

const LanguageSwitcherSelector = ({lang, handleChangeLanguage}) => {

  const onChange = e =>{
    handleChangeLanguage(e.target.className);
  }

  const options = languages.map(language => {
    if(language.code != lang){
      return <li onClick={onChange}><div value={language.code} className={language.code} ></div></li>
    }  
  });
    
  return (
    <div className="lang"> 
      <div 
        className={lang}
      >
      </div>
      <ul class="dropdown" >
        {options}
      </ul>
    </div>
  )
}

export default App;
