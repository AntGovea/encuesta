"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Excecute = void 0;
4; //!Metodo para reduccion de codigo de peticiones
var Connection_1 = __importDefault(require("../db/Connection"));
var Excecute = /** @class */ (function () {
    function Excecute() {
        // metodo encargado de ejecutar consultas sql que recibe como paramtro, este metodo se repite muchas veces en el codigo de backend - por lo que se creo este
        //m,etodo general que solo si hay algun problema , imprime el rror , la sentencia y devuelve un objeto con la proopiedad validacion en tru
        //si todo salio bien y false si la consulta o la conexion sale mal
        this.query = function (sentencial_sql) {
            try {
                var er = void 0;
                return new Promise(function (resolve, reject) {
                    Connection_1.default.getConnection(function (e, connection) {
                        if (e) {
                            return {
                                msg: "Error al abrir conexion ",
                                error: e.msessage,
                                code: 500,
                            };
                        }
                        else {
                            connection.query(sentencial_sql, function (error, results, fields) {
                                connection.release();
                                if (error) {
                                    console.log(sentencial_sql);
                                    console.log('error al ejecuatr sentencia slq');
                                    console.log("*******************************" + sentencial_sql + "****************************");
                                    console.log(error.message);
                                    return resolve({
                                        validacion: false,
                                        descripcion: error.message
                                    });
                                }
                                else {
                                    return resolve({
                                        validacion: true,
                                        descripcion: "consulta exitosa",
                                        data: results
                                    });
                                }
                            });
                        }
                    });
                }).catch(function (error) {
                    return {
                        validacion: false,
                        descripcion: error.message,
                    };
                });
            }
            catch (e) {
            }
        };
    }
    return Excecute;
}());
exports.Excecute = Excecute;
