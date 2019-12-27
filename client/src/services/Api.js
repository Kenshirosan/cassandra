/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>

// @TODO voir pour les autres options, CSRF etc etc

import axios from 'axios';


export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/`
  });
}
