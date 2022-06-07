
const mysql = require('mysql');
require('dotenv').config();

//metodo que devuleve las variables de entorno para saber si estamos en desarrollo o estamos en produccion
const getCredentials=()=>{
  // return  {
  //   connectionLimit: 10,
  //   host: "localhost",
  //   user: "root",
  //   password: "rootmysqlGl0b4lclick@2021",
  //   database: "nzsgkwnk_plataforma",
  // } 
  return  {
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "encuesta",
  } 
}
const connection  = mysql.createPool(getCredentials());

export default connection;
