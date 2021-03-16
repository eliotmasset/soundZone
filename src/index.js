//Impportation des dépendances
import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import body from './html/index.html';
import './css/style.css';
import {SoundZone} from './js/SoundZone.js';
import fontawesome from "./css/fontawesome/css/all.css";
import bg from './img/background.png';
//Initialisation des variables :
document.body.innerHTML=body;
document.body.style.background="url(."+bg+")";
ReactDOM.render(
    <SoundZone />,
    document.getElementById('body')
  );
