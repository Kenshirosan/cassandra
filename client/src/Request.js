/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//@author Laurent <laurent@marseille-web.fr>

// @TODO faire les request a partir de services.


import api from '@/services/Api';

export default class Request {
    static getTimeline() {
        api().get('')
    }

}