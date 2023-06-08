import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LocalizedButton = ({ translationKey, onClick }) => {
  const { language } = useContext(LanguageContext);
  const translations = require(`../translate/${language}.js`).default;

  return (
    <button onClick={onClick}>{translations[translationKey]}</button>
  );
};

export default LocalizedButton;