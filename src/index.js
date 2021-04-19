import './styles.css';
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

import countriesCards from './countries-cards.hbs';
import notFullCards from './countries-not-full-cards.hbs';

import getCountries from './js/fetchCountries';
import { debounce } from 'lodash';


const refs = {
    inputText: document.querySelector('.print-text-country'),
    renderText: document.querySelector('.render-text'),

};


let nameCountry = '';

refs.inputText.addEventListener('input', debounce(onPrintNameCountry, 500));
function onPrintNameCountry () {

    nameCountry = refs.inputText.value;
    getCountries(nameCountry)
    .then(render)
    .catch(error => {console.log(error);});

}

  

function render (countries) {
    let numberCountries = countries.length;
    if(numberCountries === 1) {
        const markUp = countriesCards(countries);
        refs.renderText.innerHTML = markUp;
    }

    else if(numberCountries < 10) {
        const markUp = notFullCards(countries);
        refs.renderText.innerHTML = markUp;
    }

    else if(numberCountries >= 10) {
        error('Too many matches found. Please enter a more specific query!');
    }
    
}