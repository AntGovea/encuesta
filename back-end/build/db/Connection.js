"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
require('dotenv').config();
//metodo que devuleve las variables de entorno para saber si estamos en desarrollo o estamos en produccion
var getCredentials = function () {
    // return  {
    //   connectionLimit: 10,
    //   host: "localhost",
    //   user: "root",
    //   password: "rootmysqlGl0b4lclick@2021",
    //   database: "nzsgkwnk_plataforma",
    // } 
    return {
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "root",
        database: "encuesta",
    };
};
var connection = mysql.createPool(getCredentials());
exports.default = connection;
