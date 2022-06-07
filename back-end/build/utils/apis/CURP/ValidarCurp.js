"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCurpAPI = void 0;
var axios_1 = __importDefault(require("axios"));
var Connection_1 = __importDefault(require("../../../db/Connection"));
/**
 * * API validación CURP
 * * https://valida-curp.com.mx/
 * *
 */
var DuplicadosCurp;
var validarCurpAPI = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var curp, tokenPruebas, tokenProduccion, obtener, calcular, json, ulrApiCurp, resp, data_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('validarcurp');
                curp = req.body.curp;
                tokenPruebas = "pruebas";
                tokenProduccion = "6b229824-8688-42c6-bf68-3c846e24d626";
                obtener = "obtener_datos";
                calcular = "calcular_curp";
                ulrApiCurp = "https://api.valida-curp.com.mx/curp/".concat(obtener, "/?token=").concat(tokenPruebas, "&curp=").concat(curp);
                console.log(ulrApiCurp);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, axios_1.default.get(ulrApiCurp)];
            case 2:
                resp = _a.sent();
                return [4 /*yield*/, resp.data];
            case 3:
                json = _a.sent();
                // console.log('json')
                console.log(json);
                if (json) {
                    data_1 = json.response.Solicitante;
                    if (json.error) {
                        res.status(500).send({
                            msg: json.error_message,
                            code: 500,
                            data: json,
                        });
                    }
                    else {
                        //!una vez validado el curp debemos revisar que no este registrado por otro usuario
                        Connection_1.default.getConnection(function (err, connection) {
                            var selectCurps = "SELECT * FROM persona WHERE curp='".concat(curp, "';");
                            connection.query(selectCurps, function (error, results, fields) {
                                connection.release();
                                console.log(selectCurps);
                                if (error) {
                                    res.status(500).send({
                                        msg: "ERROR AL BUSCAR CURP EN LA BD",
                                        error: error.message,
                                    });
                                }
                                else {
                                    var listadoCurps = results[0];
                                    if (curp === json.response.Solicitante.CURP.toString()) {
                                        console.log("listadoCurps");
                                        console.log(listadoCurps);
                                        if (!listadoCurps) {
                                            res.status(200).send({
                                                msg: "Curp Valido",
                                                code: 200,
                                                data: data_1,
                                            });
                                        }
                                        else {
                                            res.status(200).send({
                                                msg: "Este curp ya esta siendo usado",
                                                code: 409,
                                            });
                                        }
                                    } //coincidentes
                                    else {
                                        console.log("no coincidentes");
                                        console.log("listadoCurps");
                                        console.log(listadoCurps);
                                        if (!listadoCurps) {
                                            console.log("Curp no coincidente pero Valido");
                                            res.status(200).send({
                                                msg: "Curp no coincidente pero Valido",
                                                code: 200,
                                                data: data_1,
                                            });
                                        }
                                        else {
                                            console.log("Curp no coincident y ademas ya esta siendo usado");
                                            res.status(200).send({
                                                msg: "Curp no coincident y ademas ya esta siendo usado",
                                                code: 409,
                                            });
                                        }
                                    }
                                }
                            });
                        });
                    }
                }
                else {
                    res.status(500).send({
                        msg: "NO HAY RESPUESTA DEL SERVIDOR API-CURP",
                        code: 500,
                        data: json,
                    });
                }
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                console.log("Error al validar CURP-API-BACK");
                console.log(e_1.message);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.validarCurpAPI = validarCurpAPI;
